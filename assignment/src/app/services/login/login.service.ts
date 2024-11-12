import { Injectable } from '@angular/core';
import { loginModel } from '../../login/login.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAdmin!: boolean;
  constructor() {}
  login(cred: loginModel): Observable<boolean> {
    if (cred.userName == 'admin' && cred.password == '123') {
      this.isAdmin = true;
      return of(true);
    } else if (cred.userName == 'customer' && cred.password == '123') {
      return of(true);
    } else {
      return of(false);
    }
  }
}
