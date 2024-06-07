import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Users } from './interface/users.interface';
import { environment } from '../../../environment';


@Injectable({
    providedIn: 'root',
})
export class DatabaseService {
    constructor(private http: HttpClient) { }

    baseUrl = environment.BASE_URL;
    private userCreatedSubject: Subject<void> = new Subject<void>();

    getAllUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(this.baseUrl + '/users');
    }

    createUser(user: Users): Observable<Users> {
        return this.http.post<Users>(`${this.baseUrl}/users`, user).pipe(
            tap(() => this.userCreatedSubject.next())
        );
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
    }

    updateUser(id: number, user: Partial<Users>): Observable<Users> {
        return this.http.put<Users>(`${this.baseUrl}/users/${id}`, user);
    }
}
