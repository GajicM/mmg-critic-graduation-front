import { Component } from '@angular/core';

@Component({
  selector: 'app-critic-card',
  templateUrl: './critic-card.component.html',
  styleUrl: './critic-card.component.css'
})
export class CriticCardComponent {
   review: any = { comment: "This is a great game", rating: 5, reviewer: "John Doe" };
}
