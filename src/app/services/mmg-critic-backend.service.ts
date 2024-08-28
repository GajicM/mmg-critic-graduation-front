import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MmgCriticBackendService {

  constructor(private httpClient:HttpClient) { }

  getNewMovies(){
    return this.httpClient.get('http://localhost:8000/api/movies/new');
  }
  getTopRatedMovies(){
    return this.httpClient.get('http://localhost:8000/api/movies/top-rated');
  }
  getMostPopularRightNow(){
    return this.httpClient.get('http://localhost:8000/api/movies/most-popular');
  }

  getPopularByProduction(production:string){
    return this.httpClient.get('http://localhost:8000/api/movies/filter-popular-production/'+production);
  }
  getMovieById(id:string){
    return this.httpClient.get('http://localhost:8000/api/movies/find-by-id/'+id);
  }
}
