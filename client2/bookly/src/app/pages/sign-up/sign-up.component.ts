import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service'; // Ruta correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  //styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('Usuario registrado con éxito:', response);
        this.router.navigate(['/sign-in']);
      },
      error => {
        console.error('Error al registrar el usuario:', error);
      }
    );
  }
}
