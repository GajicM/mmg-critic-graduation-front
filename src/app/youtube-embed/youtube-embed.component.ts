import {Component} from '@angular/core';
import {YouTubePlayer} from '@angular/youtube-player';

@Component({
  standalone: true,
  imports: [YouTubePlayer],
  template: '<youtube-player videoId="dQw4w9WgXcQ"/>',
  selector: 'youtube-player',
})
export class YoutubePlayer {

}