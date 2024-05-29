import { Injectable } from '@angular/core';
import { DatabaseService } from '../../database/database.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  getAllUsers() {
    return this.databaseService.getAllUsers();
  }
  
  createUser(user: User): Observable<User> {
    return this.databaseService.createUser(user);
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}