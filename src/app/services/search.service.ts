import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  yt_key = '';
  constructor(private httpClient: HttpClient) {}

  search(value: string): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `http://localhost:8000/api/items/limit/${value}`,
    );
  }

  ytSearch(value: string): Observable<string[]> {
    return this.httpClient.get<string[]>(
      'https://www.googleapis.com/youtube/v3/search?q=' +
        value +
        '&part=id%2Csnippet&key=' +
        this.yt_key,
    );
  }
}
