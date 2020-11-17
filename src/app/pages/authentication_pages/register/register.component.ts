import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  message = '';
  firstName = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firebase error handler

  constructor(
    private authservice: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  // tslint:disable-next-line: typedef
  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice
        .registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = 'Firebase registration completed!';

          const userInfo: NavigationExtras = {
            queryParams: {
              firstName: this.firstName,
              email: this.email,
            },
          };

          this.router.navigate(['/user_info'], userInfo);
        })
        // tslint:disable-next-line: variable-name
        .catch((_error) => {
          this.error = _error;

          this.router.navigate(['/register']);
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
