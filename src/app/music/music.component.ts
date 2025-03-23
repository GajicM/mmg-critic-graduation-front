import { Component } from '@angular/core';
import { MusicService } from '../services/music_service/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent {
  musicForTitle: any[] = [];
  topRatedMusic: any[] = [];
  newestMusic: any[] = [];
  albumsByArtist: any[] = [];

  constructor(
    private musicService: MusicService,
    private router: Router,
  ) {
    this.getTopRateMusic();
    this.getNewsetMusic();
    this.getAlbumsByArtist('J.J. Cale');
  }

  getByTitle(title: string) {
    this.musicService.getByTitle(title).subscribe((data: any) => {
      this.musicForTitle = data;
    });
  }
  getTopRateMusic() {
    this.musicService.getTopRateMusic().subscribe((data: any) => {
      this.topRatedMusic = data;
    });
  }
  getNewsetMusic() {
    this.musicService.getNewsetMusic().subscribe((data: any) => {
      this.newestMusic = data;
    });
  }

  getAlbumsByArtist(artistName: string) {
    this.musicService.getAlbumsByArtist(artistName).subscribe((data: any) => {
      this.albumsByArtist = data;
    });
  }

  onItemClicked(item: any): void {
    // Example action: navigate to a detailed view of the item
    this.router.navigate(['/product', item.name], { state: { product: item } });
  }
}
