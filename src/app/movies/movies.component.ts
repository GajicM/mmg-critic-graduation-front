import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MmgCriticBackendService } from '../services/mmg-critic-backend.service';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
   newMovies:any[] =[];
  topRatedMovies:any[] =[];
  mostPopularMovies: any[] = [];
  poularMoviesByProduction: any[] = [];

   playerVars = {
    autoplay: 1,
    mute:1,
    modestbranding:1
  };
  constructor(private router:Router,private movieService:MmgCriticBackendService){
    this.onInit();
  }
  onInit(){
    this.movieService.getNewMovies()
    .pipe(
      map((dataSource :any) => {
        this.newMovies = dataSource;
        return dataSource;
      }),
      catchError(error => {
        return throwError(() => error);
      }),
    ) 
    .subscribe();
    this.movieService.getTopRatedMovies()
    .pipe(
      map((dataSource :any) => {
        this.topRatedMovies = dataSource;
        return dataSource;
      }),
      catchError(error => {
        return throwError(() => error);
      }),
    ) 
    .subscribe();
    this.movieService.getMostPopularRightNow()
    .pipe(
      map((dataSource :any) => {
        this.mostPopularMovies = dataSource;
        return dataSource;
      }),
      catchError(error => {
        return throwError(() => error);
      }),
    ) 
    .subscribe();
    this.movieService.getPopularByProduction("Marvel Studios")
    .pipe(
      map((dataSource :any) => {
        this.poularMoviesByProduction = dataSource;
        return dataSource;
      }),
      catchError(error => {
        return throwError(() => error);
      }),
    ) 
    .subscribe();
  }

  onItemClicked(item: any): void {
    // Example action: navigate to a detailed view of the item
    this.router.navigate(['/product', item.name], { state: { product: item } });
  }
  
}
