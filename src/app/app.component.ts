import { Component } from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  title = 'communally-frontend';


  constructor(private userService: UserService) {
  }

}
