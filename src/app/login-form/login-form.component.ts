import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {LoginRequest} from '../api-interface/LoginRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  public emailAddress: string;
  public password: string;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log('Login form initialized');
    this.userService.isLoggedIn()
      .subscribe(response => {
          if (response) {
            this.router.navigate(['timer']);
          }
        }
      );
  }

  loginUser(): void{
    const loginRequest: LoginRequest = {
      emailAddress: this.emailAddress,
      password: this.password
    };
    this.userService.loginUser(loginRequest);
    if(this.router.url !== 'login')
    { this.ngOnInit(); }
  }


}
