import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MmgCriticBackendService } from '../services/backend_service/mmg-critic-backend.service';
import { catchError, map, throwError } from 'rxjs';
import { SearchService } from '../services/search_service/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  newMovies: any[] = [];
  topRatedMovies: any[] = [];
  mostPopularMovies: any[] = [];
  poularMoviesByProduction: any[] = [];
  trailer_id: string = '';
  playerVars = {
    autoplay: 1,
    mute: 1,
    modestbranding: 1,
  };
  constructor(
    private router: Router,
    private movieService: MmgCriticBackendService,
    private ytSearch: SearchService,
  ) {
    this.onInit();
  }
  onInit() {
    this.movieService
      .getNewMovies()
      .pipe(
        map((dataSource: any) => {
          this.newMovies = dataSource;
          return dataSource;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        }),
      )
      .subscribe();
    this.movieService
      .getTopRatedMovies()
      .pipe(
        map((dataSource: any) => {
          this.topRatedMovies = dataSource;
          return dataSource;
        }),
        catchError((error) => {
          return throwError(() => error);
        }),
      )
      .subscribe();
    this.movieService
      .getMostPopularRightNow()
      .pipe(
        map((dataSource: any) => {
          this.mostPopularMovies = dataSource;
          return dataSource;
        }),
        catchError((error) => {
          return throwError(() => error);
        }),
      )
      .subscribe();
    this.movieService
      .getPopularByProduction('Marvel Studios')
      .pipe(
        map((dataSource: any) => {
          this.poularMoviesByProduction = dataSource;
          return dataSource;
        }),
        catchError((error) => {
          return throwError(() => error);
        }),
      )
      .subscribe();
    this.ytSearch.ytSearch('movie trailer').subscribe((res: any) => {
      this.trailer_id = res.items[0].id.videoId;
    });
  }

  onItemClicked(item: any): void {
    // Example action: navigate to a detailed view of the item
    this.router.navigate(['/product', item.name], { state: { product: item } });
  }
}
