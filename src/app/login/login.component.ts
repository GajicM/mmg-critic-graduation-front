import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  router = inject(Router);
  passwordHidden = true;
  serverResponseError = '';

  loginForm = this.fb.group({
    email: ['' /*[Validators.required, emailValidator()]*/],
    password: ['', [Validators.required]],
    remember: [false],
  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private authService: AuthService,
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (email && password) {
        // Check if email and password are not null or undefined
        this.authService.login(email, password).subscribe({
          next: (token: any) => {
            this.authService.token = token.token;
            this.authService.loggedInStatus = true;
            localStorage.setItem('token', token.token);
            let obj: any = jwtDecode(token.token);
            localStorage.setItem('username', obj.username);
            localStorage.setItem('id', obj.id);
            this.dialog.closeAll();
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.log(err);
            this.serverResponseError = 'Wrong email or password';
          },
        });
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }
  click() {
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(RegisterComponent, {
      height: '600px',
      width: '600px',
    });
  }
}
