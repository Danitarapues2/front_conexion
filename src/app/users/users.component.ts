import { Component, OnInit } from '@angular/core';
import { User, UsersService } from './service/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: { name: string, email: string }[] = []; // Ajuste del tipo para que coincida con la estructura recibida
  newUser: User = {
    name: '', email: '', password: '',
    id: 0
  }; // Inicializar el nuevo usuario

  constructor(private userService: UsersService) { } // Injected UsersService

  addUser() {
    this.userService.createUser(this.newUser).subscribe(
      (user: User) => {
        this.users.push({
          name: user.name,
          email: user.email
        });
        this.newUser = { id: 0, name: '', email: '', password: '' }; // Resetear el formulario
      },
      (err: any) => console.error(err)
    );
  }
}