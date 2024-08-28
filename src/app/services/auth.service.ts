import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  token:string='';
  constructor(private httpClient:HttpClient) { }


  login(email:string,password:string){
    return this.httpClient.post('http://localhost:8000/login',{email:email,password:password});
  }
  register(user:any){
    return this.httpClient.post('http://localhost:8000/register',user);
  }
}
