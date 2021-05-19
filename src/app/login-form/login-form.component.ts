import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {LoginRequest} from '../api-interface/LoginRequest';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  public emailAddress: string;
  public password: string;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    const loginRequest: LoginRequest = {
      emailAddress: this.emailAddress,
      password: this.password
    };
    this.userService.loginUser(loginRequest);
  }


}
