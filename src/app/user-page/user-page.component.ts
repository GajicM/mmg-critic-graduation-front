import { Component } from '@angular/core';
import { UserServiceService } from '../services/user_service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { MmgCriticBackendService } from '../services/backend_service/mmg-critic-backend.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent {
  user: any;
  recentlyReviewed: any;
  topRatedMediaForUser: any;
  bestPerformingReview: any;
  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private backendService: MmgCriticBackendService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const userId = params.get('id');
      console.log(userId);
      this.userService.getPublicUserById(userId).subscribe((data: any) => {
        this.user = data;
        this.recentlyReviewed = data.recentlyReviewedMedia;
        this.topRatedMediaForUser = data.highestGradeReviewMedia;
        console.log(this.bestPerformingReview);
        console.log(data);
        this.bestPerformingReview = data.reviews.length
          ? data.reviews.reduce(
              (max: any, review: any) =>
                review.reviewInteractionList.length >
                max.reviewInteractionList.length
                  ? review
                  : max,
              data.reviews[0],
            )
          : null;
        if (this.bestPerformingReview != null) {
          this.backendService
            .getMediaById(
              this.bestPerformingReview.type,
              this.bestPerformingReview.mediaId,
            )
            .subscribe((data: any) => {
              this.bestPerformingReview.mediaName = data.title;
            });
        }
        console.log(this.bestPerformingReview);
      });
    });
  }
}
