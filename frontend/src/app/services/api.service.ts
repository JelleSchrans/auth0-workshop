import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticate(token: string) {
    return this.http.get('https://localhost:7028/authentication', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  authorize(token: string) {
    return this.http.get('https://localhost:7028/authorization', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
