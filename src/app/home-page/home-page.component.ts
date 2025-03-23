import { Component } from '@angular/core';
import { MusicService } from '../services/music_service/music.service';
import { GamesServiceService } from '../services/games_service/games-service.service';
import { MmgCriticBackendService } from '../services/backend_service/mmg-critic-backend.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  movies = [];
  games = [];
  music = [];
  constructor(
    private musicService: MusicService,
    private movieService: MmgCriticBackendService,
    private gameService: GamesServiceService,
  ) {
    this.musicService.getNewsetMusic().subscribe((data: any) => {
      this.music = data;
    });
    this.movieService.getNewMovies().subscribe((data: any) => {
      this.movies = data;
    });
    this.gameService.getNewByReleaseDate().subscribe((data: any) => {
      this.games = data;
    });
  }
}
