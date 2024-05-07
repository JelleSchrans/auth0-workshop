import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticate(){
    return this.http.get('http://localhost:7000/api/auth0/authentication');
  }

  authorize(){
    return this.http.get('http://localhost:7000/api/auth0/authorization');
  }
}
