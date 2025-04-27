import { Component, Inject } from '@angular/core';
import { ReviewService } from '../services/review_service/review.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: false,
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  review: any = {
    grade: 5,
    comment: '',
    username: localStorage.getItem('username'),
    datePublished: new Date().getTime(),
  };
  constructor(
    private reviewService: ReviewService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private router: Router,
  ) {
    if (data.review) this.review = data.review;
  }
  onSubmit() {
    if (this.data.type != 'UPDATE') {
      this.reviewService
        .addReview(this.review, this.data.type, this.data.itemId)
        .subscribe({
          next: (res: any) => {
            this.dialog.closeAll();
            const currentUrl = this.router.url;
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([currentUrl]);
              });
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    } else {
      this.reviewService.updateReview(this.review).subscribe({
        next: (res: any) => {
          this.dialog.closeAll();
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
