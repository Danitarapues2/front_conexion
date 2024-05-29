import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../app/users/service/users.service'; 

// Importa la interfaz User desde el servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'front_Tarapues';
}
