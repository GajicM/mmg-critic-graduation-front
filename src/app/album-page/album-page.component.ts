import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-album-page',
  standalone: false,
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.css'
})
export class AlbumPageComponent {
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay:1,
    mute:1
  };
  reviews:any[] =[]
  data:any;
  constructor(private musicService:MusicService, private route:ActivatedRoute) {
   this.route.snapshot.params['id']
    this.musicService.getMusicById(this.route.snapshot.params['id']).subscribe((album:any) => {
     this.data=album;
     this.reviews=album.reviews;
     if(this.reviews.length===0){
        this.reviews=[
          {comment:"No reviews yet", rating:0, reviewer:""}];
     }
     console.log(this.reviews);
   });

  }

}
