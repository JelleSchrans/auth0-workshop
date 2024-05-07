import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'auth0-frontend';
  user$ = this.authService.user$;

  token: string = '';

  authenticateText = '';
  authorizeText = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  login() {
    this.authService.loginWithRedirect();
  }

  authenticate() {
    this.apiService.authenticate(this.token).subscribe((res) => {
      this.authenticateText = 'Authenticated!';
    });
  }

  authorize() {
    this.apiService.authorize(this.token).subscribe((res) => {
      this.authorizeText = 'Authorized!';
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.authService.getAccessTokenSilently().subscribe((token) => {
        this.token = token;
      });
    });
  }
}
