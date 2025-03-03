import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: any = {};
  private _snackBar = inject(MatSnackBar);
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  validateEmail(): boolean {
    return true;
  }
  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        this.dialog.closeAll();
        let dialogRef = this.dialog.open(LoginComponent, {
          height: '600px',
          width: '600px',
        });
        this._snackBar.open(
          'Registration successful, please log in',
          'Close',
          {},
        );
      },
      error: (error) => {
        this._snackBar.open('Fill with proper info', 'Close', {});
      },
    });
  }
  onLogin() {
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '600px',
      width: '600px',
    });
  }
}
