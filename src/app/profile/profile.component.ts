import { Component, OnInit } from '@angular/core';
import {SessionService} from '../service/session/session.service';
import {Session} from '../api-interface/Session';
import {ReflectionService} from '../service/reflection/reflection.service';
import {Reflection} from '../api-interface/Reflection';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  emailAddress: string;
  panelOpenState = false;
  sessionList: Session[];
  finalSessionList: any[] = new Array();

  reflectionList: any[];

  constructor(private sessionService: SessionService,
              private reflectionService: ReflectionService) { }

  ngOnInit(): void {
    this.emailAddress = localStorage.getItem('emailAddress');
    this.sessionService.getAllSessions()
      .subscribe(response => {
        this.sessionList = response;
        this.sessionList.forEach(session => {
          console.log(session.id);
          this.reflectionService.getReflectionBySessionId(session.id)
            .subscribe(foundReflectionList => {
              foundReflectionList.forEach(reflection => {
                const newSession: Session = session;
                if (reflection.session.id === session.id)
                {
                  newSession.reflection = reflection;
                  this.finalSessionList.push(newSession);
                }
              });

            });
        });
      });

    console.log(this.finalSessionList, 'This is the final session list');

  }

  convertDateFormat( numberTime: string): any {

    let formattedNumber = numberTime.replace(/[^0-9]/g, '');
    if (formattedNumber.length <= 2)
    {
      formattedNumber = formattedNumber + ' Seconds';
    } else if (formattedNumber.length > 2 &&  formattedNumber.length <= 4)
    {
      let minutes = formattedNumber.substr(0, 1);
      minutes = minutes + ' minutes ';
      formattedNumber = minutes + formattedNumber.substr(formattedNumber.length - 1, formattedNumber.length) + ' Seconds';
    }
    return formattedNumber;
  }

}
