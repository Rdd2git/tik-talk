import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const canActivateAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isLoggedIn = inject(AuthService).isAuth;
  if (isLoggedIn) {
    return true;
  }
  return inject(Router).createUrlTree(['./login']);
};
