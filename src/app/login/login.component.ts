import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
  standalone:false,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent {
	router = inject(Router);
	passwordHidden = true;
	serverResponseError = '';

	loginForm = this.fb.group({
		email: ['', /*[Validators.required, emailValidator()]*/],
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
				this.authService.login( email, password ).subscribe({
					next: (token:any) => {
						//window.location.href = '/home';
						this.authService.token=token;
						this.router.navigate(['/']);
					},
					error: () => {
						this.serverResponseError = 'Pogrešan email ili lozinka';
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
}