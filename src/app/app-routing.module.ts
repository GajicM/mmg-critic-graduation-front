import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { MoviesComponent } from './movies/movies.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MediaPageComponent } from './media-page/media-page.component';
import { LoginComponent } from './login/login.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { UserPageComponent } from './user-page/user-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  { path: 'admin/users', component: AdminUserPageComponent },
  { path: 'movies', component: MoviesComponent },

  { path: 'games', component: GamesComponent },

  { path: 'music', component: MusicComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },

  {
    path: 'game/:id',
    component: MediaPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'movie/:id', component: MoviePageComponent },
  {
    path: 'album/:id',
    component: AlbumPageComponent,
  },
  { path: 'user/:id', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
