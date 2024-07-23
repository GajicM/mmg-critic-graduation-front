import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { MoviesComponent } from './movies/movies.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [{
  path: "",
  component: HomePageComponent
}, 
 { path: 'admin/users',
  component: AdminUserPageComponent
 }
 ,{path: 'movies',
  component: MoviesComponent
 },

 {path: 'games',
  component: GamesComponent
 },

 {path: 'music',
  component: MusicComponent
 },
 {path: 'register',
  component: RegisterComponent
 },
 {path: 'about',
  component: AboutComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
