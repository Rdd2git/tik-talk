import { Component, inject } from '@angular/core';

import { Profile } from '../../data/interfaces/profile';
import { ProfileService } from '../../data/profile.service';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  title = 'tik-talk';
  profileService = inject(ProfileService);
  profiles: Profile[] = [];
  constructor() {
    this.profileService.getProfiles().subscribe((val) => {
      this.profiles = val;
    });
  }
}
