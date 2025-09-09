import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Profile } from './interfaces/profile';
import { Pageble } from './interfaces/pageble.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly baseApiUrl = 'https://icherniakov.ru/yt-course';
  http: HttpClient = inject(HttpClient);
  me = signal<Profile | null>(null);

  getProfiles() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`);
  }

  getSubscribersShortList(subsAmount = 3) {
    return this.http
      .get<Pageble<Profile>>(`${this.baseApiUrl}/account/subscribers/`)
      .pipe(map((response) => response.items.slice(0, subsAmount)));
  }

  getMe() {
    return this.http
      .get<Profile>(`${this.baseApiUrl}/account/me`)
      .pipe(tap((res) => this.me.set(res)));
  }
  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/${id}`);
  }
  patchProfile(profile: Partial<Profile>) {
    return this.http
      .patch<Profile>(`${this.baseApiUrl}/account/me`, profile)
      .pipe(tap((res) => this.me.set(res)))
      .subscribe();
  }
}
