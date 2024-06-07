import { Injectable } from '@angular/core';
import { DatabaseService } from '../../database/database.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getProfile() {
    throw new Error('Method not implemented.');
  }
  constructor(private databaseService: DatabaseService) { }

  getAllUsers() {
    return this.databaseService.getAllUsers();
  }

  createUser(user: User): Observable<User> {
    return this.databaseService.createUser(user);
  }
  deleteUser(id: number): Observable<void> {
    return this.databaseService.deleteUser(id)
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.databaseService.updateUser(id, user);
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}