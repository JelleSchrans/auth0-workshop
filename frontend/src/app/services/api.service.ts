import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticate(token: string) {
    return this.http.get('http://localhost:7000/authentication', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  authorize(token: string) {
    return this.http.get('http://localhost:7000/authorization', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
