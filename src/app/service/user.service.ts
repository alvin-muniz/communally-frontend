import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../api-interface/User';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginRequest} from '../api-interface/LoginRequest';
import {LoginResponse} from '../api-interface/LoginResponse';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  DEV_BASE_URL = 'http://localhost:9092';
  // BASE_URL = 'https://communally-backend-sei.herokuapp.com';

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }


  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.DEV_BASE_URL}/auth/users/register`, user);
  }

  loginUser(loginRequest: LoginRequest): any {
    return this.http.post<LoginResponse>(`${this.DEV_BASE_URL}/auth/users/login`, loginRequest)
      .subscribe(response =>
      {
        const token = response.jwt;
        localStorage.setItem('token', `${token}`);
        this.isLoginSubject.next(true);
      });

  }

  logoutUser(): void {
    localStorage.clear();
    this.isLoginSubject.next(false);

  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}

