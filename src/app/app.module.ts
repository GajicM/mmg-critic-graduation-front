import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { AdminItemPageComponent } from './admin-item-page/admin-item-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {MatButtonModule} from '@angular/material/button';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { GamesComponent } from './games/games.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminUserPageComponent,
    AdminItemPageComponent,
    NavigationMenuComponent,
    MoviesComponent,
    MusicComponent,
    GamesComponent,
    RegisterComponent,
    AboutComponent,
    ItemCarouselComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    YoutubeEmbedComponent
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
