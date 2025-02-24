import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobyApiService {
  apiKey = 'moby_kXoS72hM1NgTiIOP4v0IrEaX87V';
  constructor(private httpClient: HttpClient) {}

  getGameByName(title: string) {
    return this.httpClient.get(
      'https://api.mobygames.com/v1/games?title=' +
        title +
        '&api_key=' +
        this.apiKey,
    );
  }
}
