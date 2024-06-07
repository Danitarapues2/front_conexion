import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../service/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[] = [];
  selectedUser: Partial<User> | null = null;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        }));
      },
      (err: any) => console.log(err)
    );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.getAllUsers();
      },
      (err: any) => console.log(err)
    );
  }

  onEdit(user: User): void {
    this.selectedUser = { ...user };
  }

  updateUser(): void {
    if (this.selectedUser && this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(
        (updatedUser) => {
          this.users = this.users.map(user =>
            user.id === updatedUser.id ? updatedUser : user
          );
          this.selectedUser = null;
        },
        (error) => console.error('Error updating user:', error)
      );
    }
  }

  cancelEdit(): void {
    this.selectedUser = null;
  }
}
