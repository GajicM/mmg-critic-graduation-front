import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
   movies: any[]=[{}]
  constructor(private router:Router){}

  onItemClicked(item: any): void {
    // Example action: navigate to a detailed view of the item
    this.router.navigate(['/product', item.name], { state: { product: item } });
  }
  
}
