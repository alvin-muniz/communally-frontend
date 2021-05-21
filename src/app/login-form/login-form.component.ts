import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {LoginRequest} from '../api-interface/LoginRequest';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  public emailAddress: string;
  public password: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



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
