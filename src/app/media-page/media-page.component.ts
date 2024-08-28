import { Component } from '@angular/core';
import { YoutubePlayer } from "../youtube-embed/youtube-embed.component";
import { GamesServiceService } from '../services/games-service.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-media-page',
  standalone: false,
  templateUrl: './media-page.component.html',
  styleUrl: './media-page.component.css'
})
export class MediaPageComponent {
  data:any;
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay:1,
    mute:1
  };
  reviews:any[] =[]
  constructor(private gamesService:GamesServiceService, private route:ActivatedRoute) {
   this.route.snapshot.params['id']
    this.gamesService.getGameById(this.route.snapshot.params['id']).subscribe((game:any) => {
     this.data=game;
     console.log(this.data)
     this.reviews=game.reviews;
     if(this.reviews.length===0){
        this.reviews=[
          {comment:"No reviews yet", rating:0, reviewer:""}];
     }
   });

  }

}
