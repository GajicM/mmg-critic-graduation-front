import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../services/review_service/review.service';
import { MusicService } from '../services/music_service/music.service';
import { GamesServiceService } from '../services/games_service/games-service.service';
import { MmgCriticBackendService } from '../services/backend_service/mmg-critic-backend.service';

@Component({
  selector: 'app-critic-card',
  templateUrl: './critic-card.component.html',
  styleUrl: './critic-card.component.css',
})
export class CriticCardComponent implements OnChanges {
  @Input() type = '';
  @Input() myReview: boolean = false;
  @Input() review: any = {
    comment: 'This is a great game',
    rating: 5,
    reviewer: 'John Doe',
  };
  liked = 0;
  disliked = 0;
  mediaType: string = '';
  title: string = '';
  mediaUrl: string = '';
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private albumService: MusicService,
    private gameService: GamesServiceService,
    private movieService: MmgCriticBackendService,
  ) {
    this.getMediaForReview();
    this.getLinkForMediaTitle();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['review'] && changes['review'].currentValue) {
      this.updateLikes(this.review);
      this.getMediaForReview();
      this.getLinkForMediaTitle();
    }
  }
  updateReview() {
    let dialogRef = this.dialog.open(ReviewComponent, {
      data: {
        itemId: this.route.snapshot.params['id'],
        type: 'UPDATE',
        review: this.review,
      },
    });
  }

  likeReview(isLiked: boolean) {
    const userId = localStorage.getItem('id');
    if (userId == null) alert('You must log in to interact');
    console.log(this.review);
    this.reviewService
      .leaveInteraction(isLiked, userId, this.review.id)
      .subscribe((data: any) => {
        console.log(data);
        this.updateLikes(data);
      });
  }
  updateLikes(review: any) {
    this.liked = review.reviewInteractionList.filter((int: any) => {
      console.log(int);
      return int.liked == true;
    }).length;
    this.disliked = review.reviewInteractionList.filter((int: any) => {
      return int.liked == false;
    }).length;
    console.log(this.liked);
  }
  getMediaForReview() {
    console.log(this.review);
    if (this.review.type && this.review.mediaId) {
      let response: any;
      switch (this.review.type) {
        case 'MOVIE': {
          this.mediaType = 'MOVIE';
          response = this.movieService.getMovieById(this.review.mediaId);
          break;
        }
        case 'MUSIC': {
          this.mediaType = 'MUSIC';

          response = this.albumService.getMusicById(this.review.mediaId);
          break;
        }
        case 'GAME': {
          this.mediaType = 'GAME';
          response = this.gameService.getGameById(this.review.mediaId);
          break;
        }
        default:
          return;
      }
      response.subscribe((data: any) => {
        this.title = data.title;
        console.log(this.title);
      });
    }
  }
  getLinkForMediaTitle() {
    switch (this.review.type) {
      case 'MOVIE':
        this.mediaUrl = '/movie/' + this.review.mediaId;
        break;
      case 'MUSIC':
        this.mediaUrl = '/album/' + this.review.mediaId;
        break;
      case 'GAME':
        this.mediaUrl = '/game/' + this.review.mediaId;
        break;
      default:
        break;
    }

    return;
  }
}
