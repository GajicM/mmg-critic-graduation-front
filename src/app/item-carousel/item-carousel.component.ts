import { Component, OnInit, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.css']
})
export class ItemCarouselComponent {

 @Input() items: any[] =[];
@Input() imgSource: string = '';
  private isMouseDown = false;
  private startX: number=0;
  private scrollLeft: number=0;
  private removeMouseMoveListener: () => void;
  private removeMouseUpListener: () => void;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private domSanitizer: DomSanitizer) { 
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
  @Output() itemClicked = new EventEmitter<any>();
  onItemClick(item: any): void {
    this.itemClicked.emit(item);
  }
  sanitazeUrl(url: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
