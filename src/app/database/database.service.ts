import { HttpClient } from '@angular/common/http';
import { AbstractType, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './interface/users.interface';
import { environment } from '../../../environment';


@Injectable({
    providedIn: 'root',
})
export class DatabaseService {
    constructor(private http: HttpClient) { }

    baseUrl = environment.BASE_URL;

    getAllUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(this.baseUrl + '/users');
    }

    createUser(user: Users): Observable<Users> {
        return this.http.post<Users>(`${this.baseUrl}/users`, user);
      }

}