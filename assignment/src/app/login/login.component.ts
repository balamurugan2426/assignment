import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private loginService: LoginService, private route: Router) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService
      .login({
        userName: this.loginForm.value.userName,
        password: this.loginForm.value.password,
      })
      .subscribe((data) => {
        data ? this.route.navigate(['products']) : this.loginForm.reset();
      });
  }
}
export class loginModel {
  userName!: string;
  password!: string;
}
