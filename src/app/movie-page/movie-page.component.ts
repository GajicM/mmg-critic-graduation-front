import { Component, OnInit } from '@angular/core';
import { MmgCriticBackendService } from '../services/backend_service/mmg-critic-backend.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ReviewService } from '../services/review_service/review.service';
import { ReviewComponent } from '../review/review.component';
import { SearchService } from '../services/search_service/search.service';

@Component({
  selector: 'app-movie-page',
  standalone: false,
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent implements OnInit {
  playerVars: any = {
    cc_lang_pref: 'en',
    autoplay: 1,
    mute: 1,
  };
  reviews: any[] = [];
  data: any;
  myReview: any;
  reviewCnt: number = 3;
  userId: any = localStorage.getItem('id');
  constructor(
    private movieService: MmgCriticBackendService,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private dialog: MatDialog,
    private searchService: SearchService,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieService
        .getMovieById(this.route.snapshot.params['id'])
        .subscribe((game: any) => {
          this.data = game;
          this.reviews = game.reviews;
          this.searchService
            .ytSearch(game.title + ' movie trailer')
            .subscribe((res: any) => {
              this.data.trailer = res.items[0].id.videoId;
            });
          console.log(game);
          if (this.reviews.length === 0) {
            this.reviews = [
              { comment: 'No reviews yet', rating: 0, reviewer: '' },
            ];
            this.reviewService
              .addFakeReviews(this.route.snapshot.params['id'], 'MOVIE')
              .subscribe((res: any) => {
                this.reviews = res;
              });
          }
        });
      this.getMyReview();
    });
    this.getMyReview();
  }

  getMyReview() {
    let userId = localStorage.getItem('id');
    if (userId != null) {
      this.reviewService
        .getReview(userId, this.route.snapshot.params['id'], 'MOVIE')
        .subscribe((review: any) => {
          this.myReview = review;
          console.log(review);
        });
    }
  }

  leaveReview() {
    let dialogRef = this.dialog.open(ReviewComponent, {
      data: { itemId: this.route.snapshot.params['id'], type: 'MOVIE' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.movieService
        .getMovieById(this.route.snapshot.params['id'])
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
  showAll() {
    if (this.reviewCnt == 3) this.reviewCnt = (this.reviews.length % 30) - 1;
    else this.reviewCnt = 3;
  }
}
