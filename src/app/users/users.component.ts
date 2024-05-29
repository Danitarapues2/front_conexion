import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: { name: string, email: string}[] = []; // Adjusted type to match the assigned value

  constructor(private userService: UsersService) {} // Injected UsersService

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
  }
}