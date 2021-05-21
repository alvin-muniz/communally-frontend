import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {SessionService} from '../../service/session/session.service';
import {Reflection} from '../../api-interface/Reflection';
import {ReflectionService} from '../../service/reflection/reflection.service';
import {Router} from '@angular/router';
import {Session} from '../../api-interface/Session';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.less']
})
export class SessionComponent implements OnInit, OnDestroy {

  addedReflection: boolean;

  currentSession: any;
  currentReflection: Reflection = {
    id: null,
    entry: 'null',
    content: []
  };

  session: Session;
  subscription: Subscription;


  isSaved = false;



  constructor(public sessionService: SessionService,
              private reflectionService: ReflectionService,
              private router: Router) { }


  ngOnInit(): void {
    this.currentSession = this.sessionService.getCurrentSession();

    this.subscription = this.sessionService.currentSeshion.subscribe(session => this.session = session);

    if (this.currentSession.moodBefore != null) {
      this.sessionService.saveSession(this.currentSession)
        .subscribe(response => {
          this.currentSession.id = response.id;
          console.log(this.currentSession, 'Sved Session here!!!');
          this.isSaved = true;
        });
    } else {
      this.router.navigate(['timer']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
