import { Component } from '@angular/core';
import { MmgCriticBackendService } from '../services/mmg-critic-backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  standalone: false,
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent {
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay:1,
    mute:1
  };
  reviews:any[] =[]
  data:any;
  constructor(private movieService:MmgCriticBackendService, private route:ActivatedRoute) {
   this.route.snapshot.params['id']
    this.movieService.getMovieById(this.route.snapshot.params['id']).subscribe((game:any) => {
     this.data=game;
     this.reviews=game.reviews;
     if(this.reviews.length===0){
        this.reviews=[
          {comment:"No reviews yet", rating:0, reviewer:""}];
     }
     console.log(this.reviews);
   });

  }
}
