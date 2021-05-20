import { Component, OnInit } from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {SessionService} from '../../service/session/session.service';
import {Reflection} from '../../api-interface/Reflection';
import {ReflectionService} from '../../service/reflection/reflection.service';

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

  constructor(private sessionService: SessionService, private reflectionService: ReflectionService) { }

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

  showAddedReflection(reflectionMap: Map<boolean, Reflection>): void {
    console.log(reflectionMap.get(true), 'the returned map object should call before content map');
    this.currentReflection = reflectionMap.get(true);
    console.log(this.currentReflection, 'should have equal ids');
    this.addedReflection = reflectionMap.has(true);
  }

  saveContent(contentMap: Map<boolean, any[]>): void {
    console.log('Content pushed up after reflection saved');
    console.log(this.currentReflection.id, 'Content pushed up after reflection saved');

    contentMap.get(true).forEach(content => {
        this.reflectionService.saveReflectionContent(this.currentReflection.id, this.currentSession.id, content)
          .subscribe(savedContent => {
            console.log(savedContent.id, 'Content Saved Succcessfull wtih this id');
          });
      });

  }

  saveSession() {
    console.log('this session is saved');
  }

}
