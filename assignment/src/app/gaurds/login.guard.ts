import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService: LoginService = inject(LoginService);
  const router: Router = inject(Router);
  let loginCred = JSON.parse(localStorage.getItem('login'));
  if (loginCred?.isLoggedIn) {
    loginService.isLoggedIn = loginCred.isLoggedIn;
    loginService.isAdmin = loginCred.isAdmin;
    return loginCred.isLoggedIn;
  } else if (!loginService.isLoggedIn) {
    router.navigateByUrl('/login');
    return false;
  }
  return loginService.isLoggedIn;
};
