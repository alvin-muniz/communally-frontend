import { Component, OnInit } from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {SessionService} from '../../service/session/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.less']
})
export class SessionComponent implements OnInit {

  currentSession: any;

  constructor(private sessionService : SessionService) { }

  ngOnInit(): void {
    this.currentSession = this.sessionService.getCurrentSession();
  }

}
