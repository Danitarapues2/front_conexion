import { Injectable } from '@angular/core';
import { DatabaseService } from '../../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  constructor(private databaseService: DatabaseService) {}

  getAllUsers() {
    return this.databaseService.getAllUsers();
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}