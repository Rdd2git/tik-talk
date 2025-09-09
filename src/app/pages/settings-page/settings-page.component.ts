import { Component, effect, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/profile.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{ value: '', disabled: true }, Validators.required],
    description: [''],
    stack: [''],
  });

  constructor() {
    effect(() => {
      //@ts-ignore
      this.form.patchValue({
        ...this.profileService.me(),
        //@ts-ignore
        stack: this.mergeStack(this.profileService.me()?.stack),
      });
    });
  }

  onSave() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.valid) return;
    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile(this.form.value));
  }
  splitStack(stack: string | null | string[]) {
    if (Array.isArray(stack)) return stack;
    if (!stack) return [];
    return stack.split(',');
  }
  mergeStack(stack: string | null | string[]) {
    if (Array.isArray(stack)) return stack.join(',');
    if (!stack) return '';
    return stack;
  }
}
