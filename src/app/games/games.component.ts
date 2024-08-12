import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { GamesServiceService } from '../services/games-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  newTopRatedGames: any[] =[];
  newReleaseGames: any[] = [];
  topGamesByDeveloper: any[] = [];
  topForPlatform: any[] = [];
  newByGenre: any[] = [];

  playerVars = {
    autoplay: 1,
    mute:1,
    modestbranding:1
  };
  constructor(private router: Router,private gameService:GamesServiceService) { 
    this.onInit();
  }
 
  onInit(){
    
    this.gameService.getNewGamesByTopRated()
    .subscribe((dataSource :any) => {
      this.newTopRatedGames = dataSource;
    });

    this.gameService.getNewByReleaseDate().subscribe((dataSource :any) => {
      this.newReleaseGames = dataSource;
    });

    this.gameService.getGamesByDeveloper("Rockstar").subscribe((dataSource :any) => {
      this.topGamesByDeveloper = dataSource;});

    this.gameService.getGamesByPlatform("XOne").subscribe((dataSource :any) => {
      this.topForPlatform = dataSource;});

    this.gameService.getNewByGenre("MMO").subscribe((dataSource :any) => {
      this.newByGenre = dataSource;}); 


  }
  
   onItemClicked(item: any): void {
    // Example action: navigate to a detailed view of the item
    this.router.navigate(['/product', item.name], { state: { product: item } });
  }
}

