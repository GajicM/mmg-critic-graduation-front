import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mmg-critic';
  constructor(protected router: Router) {}
  // private readonly api = process.env['APP_API_ENDPOINT'];
}
