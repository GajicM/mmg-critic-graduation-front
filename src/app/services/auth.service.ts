import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string = localStorage.getItem('token') || '';
  loggedInStatus =
    localStorage.getItem('token') != null || this.token.length > 0;

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post('http://localhost:8000/api/auth/login', {
      email: email,
      password: password,
    });
  }
  register(user: any) {
    return this.httpClient.post(
      'http://localhost:8000/api/auth/register',
      user,
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.loggedInStatus = false;
    localStorage.removeItem('username');
    localStorage.removeItem('id');
  }
}
