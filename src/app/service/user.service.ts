import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../api-interface/User';
import {Observable} from 'rxjs';
import {LoginRequest} from '../api-interface/LoginRequest';
import {LoginResponse} from '../api-interface/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:9092/auth/users/register', user);
  }

  loginUser(loginRequest: LoginRequest): any {
    return this.http.post<LoginResponse>('http://localhost:9092/auth/users/login', loginRequest)
      .subscribe(response =>
      {
        const token = response.jwt;
        localStorage.setItem('token', `${token}`);
      });
  }
}

