import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'auth0-frontend';

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  login() {
    this.authService.loginWithRedirect();
  }

  authenticate() {
    this.apiService.authenticate().subscribe((res) => {
      console.log(res);
    });
  }

  authorize() {
    this.apiService.authorize().subscribe((res) => {
      console.log(res);
    });
  }

  logout() {
    this.authService.logout();
  }
}
