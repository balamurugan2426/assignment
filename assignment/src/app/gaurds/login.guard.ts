import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);
  if (!loginService.isLoggedIn) {
    router.navigateByUrl('login');
    return false;
  }
  return loginService.isLoggedIn;
};
