import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent implements OnInit {

  username: string;
  password: string;
  emailAddress: string;

  constructor() { }

  ngOnInit(): void {
    console.log('SIgn Up Form initialized');
  }

}
