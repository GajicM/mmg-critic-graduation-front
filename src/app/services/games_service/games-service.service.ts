import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamesServiceService {
  constructor(private httpClient: HttpClient) {}

  getNewGamesByTopRated() {
    return this.httpClient.get('http://localhost:8000/api/games/new-by-top');
  }
  getNewByReleaseDate() {
    return this.httpClient.get(
      'http://localhost:8000/api/games/new-by-release',
    );
  }
  getGamesByPlatform(platform: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/games/by-platform/' + platform,
    );
  }
  getGamesByDeveloper(developer: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/games/top-by-developer/' + developer,
    );
  }
  getByTitleContaining(title: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/games/title-containing/' + title,
    );
  }
  getNewByGenre(genre: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/games/new-by-genre/' + genre,
    );
  }
  getGameById(id: string) {
    return this.httpClient.get(
      'http://localhost:8000/api/games/find-by-id/' + id,
    );
  }
  updateGameDesc(game: any) {
    return this.httpClient.put(
      'http://localhost:8000/api/games/update-game',
      game,
    );
  }
}
