import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Login method
  login() {

    if (!this.username || !this.password) {

      this.errorMessage =
        'Username and password are required.';

      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService
      .login(this.username, this.password)
      .subscribe({

        next: (response) => {

          console.log('LOGIN RESPONSE:', response);

          // Save JWT token
          this.authService.setToken(
            response.accessToken
          );

          // Save user information
          this.authService.setUser(response);

          this.loading = false;

          // Navigate after successful login
          this.router.navigate(['/day9']);

        },

        error: (error) => {

          console.error('LOGIN ERROR:', error);

          this.errorMessage =
            'Invalid username or password.';

          this.loading = false;

        }

      });
  }

  // Test JWT interceptor
  getProfile() {

    this.authService
      .getCurrentUser()
      .subscribe({

        next: (response) => {

          console.log(
            'CURRENT USER:',
            response
          );

        },

        error: (error) => {

          console.error(
            'PROFILE ERROR:',
            error
          );

        }

      });
  }
}