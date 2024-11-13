import { Injectable } from '@angular/core';
import { loginModel } from '../../login/login.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAdmin!: boolean;
  isLoggedIn!: boolean;
  constructor() {}
  login(cred: loginModel): Observable<boolean> {
    if (cred.userName == 'admin' && cred.password == '123') {
      this.isAdmin = true;
      this.isLoggedIn = true;
      return of(true);
    } else if (cred.userName == 'customer' && cred.password == '123') {
      this.isAdmin = false;
      this.isLoggedIn = true;
      return of(true);
    } else {
      this.isAdmin = false;
      this.isLoggedIn = false;
      return of(false);
    }
  }
}
