import { Component } from '@angular/core';
import { YoutubePlayer } from "../youtube-embed/youtube-embed.component";

@Component({
  selector: 'app-media-page',
  standalone: false,
  templateUrl: './media-page.component.html',
  styleUrl: './media-page.component.css'
})
export class MediaPageComponent {
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay:1,
    mute:1
  };
  reviews:any[] = [
    { comment: "This is a great game", rating: 5, reviewer: "John Doe" },
    { comment: "This is a great game", rating: 5, reviewer: "John Doe1" },
    { comment: "This is a great game", rating: 5, reviewer: "John Doe2" },
    { comment: "This is a great game", rating: 5, reviewer: "John Doe" },
    { comment: "This is a great game", rating: 5, reviewer: "John Doe" }
  ];
  

}
