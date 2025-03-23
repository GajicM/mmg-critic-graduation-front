import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private httpClient: HttpClient) {}
  getUserById(userId: number) {
    return this.httpClient.get(`http://localhost:8000/api/users/id/${userId}`);
  }
  getPublicUserById(userId: any) {
    if (typeof userId === 'number')
      return this.httpClient.get(
        `http://localhost:8000/api/users/public/${userId}`,
      );
    else
      return this.httpClient.get(
        `http://localhost:8000/api/users/public/username/${userId}`,
      );
  }
}
