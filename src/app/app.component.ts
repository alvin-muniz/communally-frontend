import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'communally-frontend';

  isLoggedIn: Observable<boolean>;


  constructor(public userService: UserService) {
    this.isLoggedIn = userService.isLoggedIn();
  }

}
