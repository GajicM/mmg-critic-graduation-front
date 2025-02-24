import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewComponent } from '../review/review.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-critic-card',
  templateUrl: './critic-card.component.html',
  styleUrl: './critic-card.component.css',
})
export class CriticCardComponent {
  @Input() type = '';
  @Input() myReview: boolean = false;
  @Input() review: any = {
    comment: 'This is a great game',
    rating: 5,
    reviewer: 'John Doe',
  };
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {}
  updateReview() {
    let dialogRef = this.dialog.open(ReviewComponent, {
      height: '600px',
      width: '500px',
      data: {
        itemId: this.route.snapshot.params['id'],
        type: 'UPDATE',
        review: this.review,
      },
    });
  }
}
