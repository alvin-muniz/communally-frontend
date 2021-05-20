import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../api-interface/User';
import {Observable} from 'rxjs';
import {LoginRequest} from '../api-interface/LoginRequest';
import {LoginResponse} from '../api-interface/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

//   if(localStorage.getItem('token') != null)
// {
//   this.isLoggedIn = true;
//   console.log('this user is logged in');
// } else {
//   console.log('this user is not logged in');
// }
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

  logoutUser(): void {
    localStorage.clear();
  }
}

