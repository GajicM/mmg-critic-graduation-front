import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpClient:HttpClient) { }

  getByTitle(title:string){
    return this.httpClient.get('http://localhost:8000/api/music/by-title/'+title);
  }
  getTopRateMusic(){
    return this.httpClient.get('http://localhost:8000/api/music/top-rated');
  }
  getNewsetMusic(){
    return this.httpClient.get('http://localhost:8000/api/music/newest');
  }

  getAlbumsByArtist(artistName:string){
    return this.httpClient.get('http://localhost:8000/api/music/by-artist/'+artistName);
  }

}
