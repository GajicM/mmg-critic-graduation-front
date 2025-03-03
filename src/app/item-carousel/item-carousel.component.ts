import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter,
  input,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.css'],
})
export class ItemCarouselComponent {
  @Input() items: any[] = [];
  @Input() ref: string = '';
  @Input() imgSource: string = '';
  private isMouseDown = false;
  private startX: number = 0;
  private scrollLeft: number = 0;
  private removeMouseMoveListener: () => void;
  private removeMouseUpListener: () => void;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer,
    private router: Router,
  ) {
    this.removeMouseMoveListener = () => {};
    this.removeMouseUpListener = () => {};
  }

  onMouseDown(event: MouseEvent): void {
    this.isMouseDown = true;
    this.startX =
      event.pageX -
      this.elRef.nativeElement.querySelector('.product-list').offsetLeft;
    this.scrollLeft =
      this.elRef.nativeElement.querySelector('.product-list').scrollLeft;
    // this.removeMouseMoveListener = this.renderer.listen('window', 'mousemove', this.onMouseMove.bind(this));
    this.removeMouseUpListener = this.renderer.listen(
      'window',
      'mouseup',
      this.onMouseUp.bind(this),
    );
  }

  onMouseUp(): void {
    this.isMouseDown = false;
    this.removeMouseMoveListener();
    this.removeMouseUpListener();
  }
  @Output() itemClicked = new EventEmitter<any>();
  onItemClick(item: any): void {
    this.itemClicked.emit(item);
    this.router.navigate(['/' + this.ref, item.id]);
  }
  sanitazeUrl(url: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getColor(_t4: any): any {
    let avg = _t4.voteAverage || _t4.finalGrade;
    if (avg >= 8.5) {
      return 'green';
    } else if (avg >= 7) {
      return 'lime';
    } else if (avg >= 5) {
      return 'orange';
    } else if (avg > 0) {
      return 'red';
    }
    return 'transparent';
  }
  getNumber(_t4: any) {
    let avg = _t4.voteAverage || _t4.finalGrade;
    if (avg > 0) {
      return avg.toFixed(1);
    }
    return '';
  }
}
