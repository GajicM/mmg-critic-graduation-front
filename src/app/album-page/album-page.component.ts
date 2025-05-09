import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../services/music_service/music.service';
import { ReviewService } from '../services/review_service/review.service';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from '../review/review.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-album-page',
  standalone: false,
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.css',
})
export class AlbumPageComponent {
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay: 1,
    mute: 1,
  };
  reviews: any[] = [];
  data: any;
  myReview: any;
  imgSource: string = '';
  userId: any = localStorage.getItem('id');
  reviewCnt: number = 3;
  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private reviewService: ReviewService,
    private domSanitizer: DomSanitizer,
  ) {
    this.route.params.subscribe((params) => {
      this.musicService
        .getMusicById(this.route.snapshot.params['id'])
        .subscribe((album: any) => {
          this.data = album;
          this.reviews = album.reviews;
          if (this.reviews.length === 0) {
            this.reviews = [
              { comment: 'No reviews yet', rating: 0, reviewer: '' },
            ];
            this.reviewService
              .addFakeReviews(this.route.snapshot.params['id'], 'MUSIC')
              .subscribe((res: any) => {
                this.reviews = res;
              });
          }
        });

      this.getMyReview();
    });
  }

  getMyReview() {
    let userId = localStorage.getItem('id');
    if (userId != null) {
      this.reviewService
        .getReview(userId, this.route.snapshot.params['id'], 'MUSIC')
        .subscribe((review: any) => {
          this.myReview = review;
        });
    }
  }

  leaveReview() {
    let dialogRef = this.dialog.open(ReviewComponent, {
      data: { itemId: this.route.snapshot.params['id'], type: 'MUSIC' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getMyReview();
      this.musicService
        .getMusicById(this.route.snapshot.params['id'])
        .subscribe((game: any) => {
          this.data = game;
          this.reviews = game.reviews;
          if (this.reviews.length === 0) {
            this.reviews = [
              { comment: 'No reviews yet', rating: 0, reviewer: '' },
            ];
          }
          this.getMyReview();
        });
    });
  }
  sanitazeUrl(url: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  showAll() {
    if (this.reviewCnt == 3) this.reviewCnt = (this.reviews.length % 30) - 1;
    else this.reviewCnt = 3;
  }
}
