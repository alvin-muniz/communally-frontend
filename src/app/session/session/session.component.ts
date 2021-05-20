import { Component, OnInit } from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {SessionService} from '../../service/session/session.service';
import {Reflection} from '../../api-interface/Reflection';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.less']
})
export class SessionComponent implements OnInit {

  addedReflection: boolean;

  currentSession: any;
  currentReflection: any;

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

  showAddedReflection(showReflection: Map<boolean, Reflection>): void {
    console.log(showReflection.get(true), 'the returned map object');
    this.addedReflection = showReflection.has(true);
  }

  saveSession() {
    console.log('this session is saved');
  }

}
