import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../api-interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): any {
    return this.http.post('http://localhost:9092/auth/users/register', user);
  }
}
