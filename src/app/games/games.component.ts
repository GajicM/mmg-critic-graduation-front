import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  products: any[] =[
    {
     
      "name": "Game 1",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    },
    {
     
      "name": "Game 1",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    },
    {
     
      "name": "Game 1",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://seeklogo.com/images/M/mgm-metro-goldwyn-mayer-logo-AE4545BDC9-seeklogo.com.png"
    }
    ,
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2zw7BWk2m-WvgUujwiupJH&ust=1721825305409000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjc-J6ZvYcDFQAAAAAdAAAAABAE"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2zw7BWk2m-WvgUujwiupJH&ust=1721825305409000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjc-J6ZvYcDFQAAAAAdAAAAABAE"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2zw7BWk2m-WvgUujwiupJH&ust=1721825305409000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjc-J6ZvYcDFQAAAAAdAAAAABAE"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2zw7BWk2m-WvgUujwiupJH&ust=1721825305409000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjc-J6ZvYcDFQAAAAAdAAAAABAE"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2zw7BWk2m-WvgUujwiupJH&ust=1721825305409000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjc-J6ZvYcDFQAAAAAdAAAAABAE"
    },
    {
     
      "name": "Game 2",
      "price": 20,
      "status": "INSTOCK",
      "inventoryStatus": "INSTOCK",
      "category": "action",
      "quantity": 5,
      "rating": 4,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2zw7BWk2m-WvgUujwiupJH&ust=1721825305409000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjc-J6ZvYcDFQAAAAAdAAAAABAE"
    }
  ];

  responsiveOptions: any[] =  [ {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
},
{
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 1
},
{
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
} ];
  ngOnInit() {
 /*     this.mmgService.getMovies().subscribe((data: any) => {
          this.products = data;
      });
      if(this.products ==undefined){
       
      }
      this.responsiveOptions = [
       
      ];*/
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          case undefined:
            return 'danger';
      }
      return "danger";
  }

  private isMouseDown = false;
  private startX: number=0;
  private scrollLeft: number=0;
  private removeMouseMoveListener: () => void;
  private removeMouseUpListener: () => void;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private router: Router) {
    this.removeMouseMoveListener = () => {};
    this.removeMouseUpListener = () => {};
  }


  onMouseDown(event: MouseEvent): void {
    this.isMouseDown = true;
    this.startX = event.pageX - this.elRef.nativeElement.querySelector('.product-list').offsetLeft;
    this.scrollLeft = this.elRef.nativeElement.querySelector('.product-list').scrollLeft;
    this.removeMouseMoveListener = this.renderer.listen('window', 'mousemove', this.onMouseMove.bind(this));
    this.removeMouseUpListener = this.renderer.listen('window', 'mouseup', this.onMouseUp.bind(this));
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isMouseDown) return;
    event.preventDefault();
    const x = event.pageX - this.elRef.nativeElement.querySelector('.product-list').offsetLeft;
    const walk = (x - this.startX) * 2; // Adjust the scroll speed as needed
    this.elRef.nativeElement.querySelector('.product-list').scrollLeft = this.scrollLeft - walk;
  }

  onMouseUp(): void {
    this.isMouseDown = false;
    this.removeMouseMoveListener();
    this.removeMouseUpListener();
  }


  onItemClicked(item: any): void {
    // Example action: navigate to a detailed view of the item
    this.router.navigate(['/product', item.name], { state: { product: item } });
  }
}

