import { ChangeDetectorRef, Component } from '@angular/core';
import { YoutubePlayer } from '../youtube-embed/youtube-embed.component';
import { GamesServiceService } from '../services/games-service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from '../review/review.component';
import { MobyApiService } from '../services/moby-api.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-media-page',
  standalone: false,
  templateUrl: './media-page.component.html',
  styleUrl: './media-page.component.css',
})
export class MediaPageComponent {
  data: any;
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay: 1,
    mute: 1,
  };
  reviews: any[] = [];
  userReview: any;
  userId: any = localStorage.getItem('id');
  reviewCnt: number = 3;
  constructor(
    private gamesService: GamesServiceService,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private dialog: MatDialog,
    private ytSearch: SearchService,
  ) {
    this.route.params.subscribe((params) => {
      this.gamesService.getGameById(params['id']).subscribe((game: any) => {
        this.data = game;
        ytSearch
          .ytSearch(game.title + ' game trailer')
          .subscribe((res: any) => {
            this.data.trailer = res.items[0].id.videoId;
          });
        this.reviews = game.reviews;

        if (this.reviews.length === 0) {
          this.reviews = [
            { comment: 'No reviews yet', rating: 0, reviewer: '' },
          ];
        }
        this.reviewService
          .addFakeReviews(this.route.snapshot.params['id'], 'GAME')
          .subscribe((res: any) => {
            this.reviews = res;
            this.gamesService
              .getGameById(this.route.snapshot.params['id'])
              .subscribe((game: any) => {
                this.data = game;
              });
          });
      });
      this.getMyReview();
    });
  }
  getMyReview() {
    let userId = localStorage.getItem('id');
    if (userId != null) {
      this.reviewService
        .getReview(userId, this.route.snapshot.params['id'], 'GAME')
        .subscribe((review: any) => {
          this.userReview = review;
        });
    }
  }
  showAll() {
    if (this.reviewCnt == 3) this.reviewCnt = (this.reviews.length % 30) - 1;
    else this.reviewCnt = 3;
  }

  leaveReview() {
    let dialogRef = this.dialog.open(ReviewComponent, {
      minHeight: '9900px',
      width: '500px',
      data: { itemId: this.route.snapshot.params['id'], type: 'GAME' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.gamesService
        .getGameById(this.route.snapshot.params['id'])
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
}
