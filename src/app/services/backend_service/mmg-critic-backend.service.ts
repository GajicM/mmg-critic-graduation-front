import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MmgCriticBackendService {
  constructor(private httpClient: HttpClient) {}

  getNewMovies() {
    return this.httpClient.get('http://localhost:8000/api/movies/new');
  }
  getTopRatedMovies() {
    return this.httpClient.get('http://localhost:8000/api/movies/top-rated');
  }
  getMostPopularRightNow() {
    return this.httpClient.get('http://localhost:8000/api/movies/most-popular');
  }

  getPopularByProduction(production: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/movies/filter-popular-production/' +
        production,
    );
  }
  getMovieById(id: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/movies/find-by-id/' + id,
    );
  }
  getMediaById(type: string, id: number) {
    switch (type) {
      case 'GAME': {
        type = 'games';
        break;
      }
      case 'MUSIC': {
        type = 'music';
        break;
      }
      case 'MOVIE': {
        type = 'movies';
        break;
      }
      default:
        break;
    }
    return this.httpClient.get(
      `http://localhost:8000/api/${type}/find-by-id/${id}`,
    );
  }
}
