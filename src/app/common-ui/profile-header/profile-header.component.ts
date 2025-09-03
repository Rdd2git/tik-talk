import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile';
import { ImageUrlPipe } from '../../helpers/pipes/image-url.pipe';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImageUrlPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() profile!: Profile;
}
