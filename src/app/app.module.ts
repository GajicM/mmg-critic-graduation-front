import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminUserPageComponent } from './admin-user-page/admin-user-page.component';
import { AdminItemPageComponent } from './admin-item-page/admin-item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminUserPageComponent,
    AdminItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
