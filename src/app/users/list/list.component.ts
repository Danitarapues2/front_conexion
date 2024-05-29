import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {
  users: { name: string, email: string }[] = []; // Ajuste del tipo para que coincida con la estructura recibida

  constructor(private userService: UsersService) { } // Injected UsersService

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    return this.userService.getAllUsers().subscribe(
      (response: any[]) => {
        this.users = response.map((user) => ({
          name: user.name,
          email: user.email
        }));
      },
      (err: any) => console.log(err)
    );
  }}
