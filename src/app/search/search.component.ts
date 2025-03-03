import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounce,
  debounceTime,
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { getType } from '@angular/flex-layout/extended/style/style-transforms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  options: string[] = ['Music', 'Movies', 'Games']; // Replace with actual data or API call
  filteredOptions: Observable<any[]> = of([]);

  constructor(
    private searchService: SearchService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.filteredOptions = this.searchService.search(value);
      });
  }
  getType(type: string) {
    if (type === 'Music') {
      return 'album';
    } else return type.toLowerCase();
  }
}
