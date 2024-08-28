import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  constructor(private authService: AuthService) {
    console.log('Register Component');
  }


  validateEmail() : boolean{
    return true;
  }
  onSubmit() {
  
      this.authService.register(this.user).subscribe({});


  }
}
