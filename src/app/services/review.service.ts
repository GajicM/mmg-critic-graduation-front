import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private httpClient: HttpClient) {}

  getReview(userId: string, itemId: string, type: string) {
    const params = new HttpParams()
      .set('userId', userId)
      .set('itemId', itemId)
      .set('type', type);

    return this.httpClient.get('http://localhost:8000/api/reviews/get-review', {
      params,
    });
  }
  addReview(review: any, type: string, itemId: string) {
    return this.httpClient.post(
      'http://localhost:8000/api/reviews/add-review/' +
        type.toLowerCase() +
        '/' +
        itemId,
      review,
    );
  }
  updateReview(review: any) {
    return this.httpClient.put(
      'http://localhost:8000/api/reviews/update-review',
      review,
    );
  }

  addFakeReviews(itemId: string, type: string) {
    const params = new HttpParams().set('id', itemId).set('type', type);
    return this.httpClient.get(
      'http://localhost:8000/api/reviews/generate-fake-reviews',
      {
        params,
      },
    );
  }
}
