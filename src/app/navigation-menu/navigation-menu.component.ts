import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../services/auth_service/auth.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css'],
})
export class NavigationMenuComponent {
  authService: any;
  user_id = localStorage.getItem('id');
  constructor(
    private dialog: MatDialog,
    authService: AuthService,
  ) {
    this.authService = authService;
  }

  click() {
    let dialogRef = this.dialog.open(RegisterComponent, {
      height: '600px',
      width: '600px',
    });
  }
  logout() {
    this.authService.logout();
  }
}
