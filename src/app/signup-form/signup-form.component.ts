import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../api-interface/User';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent implements OnInit {

  username: string;
  password: string;
  emailAddress: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('Sign Up Form initialized');
  }

  registerUser(): void {
    let user: User = {
      username: this.username,
      password: this.password,
      emailAddress: this.emailAddress,
      id: null
    };

    this.userService.registerUser(user)
      .subscribe(foundUser => {
        console.log('This user is added to DB' + foundUser.username);
      });
  }

}
