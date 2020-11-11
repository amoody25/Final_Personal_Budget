import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firebase error handler

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}
  // tslint:disable-next-line: typedef
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }
  // tslint:disable-next-line: typedef
  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice
        .loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/userinfo']);
        })
        .catch((_error) => {
          this.error = _error;
          this.router.navigate(['/login']);
        });
    }
  }
  // tslint:disable-next-line: typedef
  validateForm(email, password) {
    if (email === undefined) {
      this.errorMessage = 'please enter email';
      return false;
    }
    if (password === undefined) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 characters';
      return false;
    }

    this.errorMessage = '';
    return true;
  }
}
