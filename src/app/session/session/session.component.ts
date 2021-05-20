import { Component, OnInit } from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {SessionService} from '../../service/session/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.less']
})
export class SessionComponent implements OnInit {

  addedReflection: boolean;

  currentSession: any;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    console.log('Session COMPONENT Called');
    this.currentSession = this.sessionService.getCurrentSession();
    if (this.currentSession != null) {

      this.sessionService.saveSession(this.currentSession)
        .subscribe(response =>
        {
          this.currentSession.id = response.id;

        });
    }
  }

  showAddedReflection(showReflection: boolean): void {
    this.addedReflection = showReflection;
  }

  // saveSession(): void {
  //   console.log(this.currentSession, 'this will be saved');
  // }

}
