import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint: string = 'http://localhost:8000';
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }

  logIn(login: string, password: string): Observable<User> {
    const url: string = `${this.endpoint}/login`;
    this.isAuthenticated = true;

    return this.http.post<User>(url, {login, password});
  }

  signUp(login: string, password: string): Observable<User> {
    const url: string = `${this.endpoint}/auth`;

    return this.http.post<User>(url, {login, password});
  }

  public signOut(): Observable<boolean> {
    // localStorage.removeItem('token');

    return of(true);
  }
}
