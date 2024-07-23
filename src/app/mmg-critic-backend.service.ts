import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MmgCriticBackendService {

  constructor(private httpClient:HttpClient) { }
  getMovies(){
    return this.httpClient.get('http://localhost:8000/api/movies/all');
  }
}
