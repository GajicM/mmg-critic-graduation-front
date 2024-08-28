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
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'; // Add this line

import {MatCardModule} from '@angular/material/card';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { YouTubePlayer } from '@angular/youtube-player';
import { MediaPageComponent } from './media-page/media-page.component';
import { CriticCardComponent } from './critic-card/critic-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { MatIconButton } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { DateTimePipe } from "./date-time.pipe";
import { DescriptionPipe } from './description.pipe';
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
    MediaPageComponent,
    CriticCardComponent,
    LoginComponent,
    MoviePageComponent,
    AlbumPageComponent,
    
    
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
    YouTubePlayer,
    MatDialogModule,
    MatError,
    MatIconButton,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    DateTimePipe,
    DescriptionPipe
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
