import { Component, OnInit } from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {SessionService} from '../../service/session/session.service';
import {Reflection} from '../../api-interface/Reflection';
import {ReflectionService} from '../../service/reflection/reflection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.less']
})
export class SessionComponent implements OnInit {

  addedReflection: boolean;

  currentSession: any;
  currentReflection: Reflection = {
    id: null,
    entry: 'null',
    content: []
  };

  constructor(private sessionService: SessionService,
              private reflectionService: ReflectionService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentSession = this.sessionService.getCurrentSession();
    if (this.currentSession != null) {
      this.sessionService.saveSession(this.currentSession)
        .subscribe(response => {
          this.currentSession.id = response.id;
        });
    }
  }

  showAddedReflection(reflectionMap: Map<boolean, Reflection>): void {
    this.currentReflection = reflectionMap.get(true);
    this.addedReflection = reflectionMap.has(true);
  }

  saveContent(contentMap: Map<boolean, any[]>): void {
    contentMap.get(true).forEach(content => {
        this.reflectionService.saveReflectionContent(this.currentReflection.id, this.currentSession.id, content)
          .subscribe(savedContent => {
            return content;
          });
      });

  }

  newSession() {
    this.router.navigate(['timer']);
  }

  viewSession() {
    this.router.navigate(['profile']);
  }

  // saveSession() {
  //   console.log('this session is saved');
  // }

}
