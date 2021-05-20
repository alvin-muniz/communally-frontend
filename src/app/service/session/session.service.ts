import { Injectable } from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {Session} from '../../api-interface/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  currentSession: Session = null;

  constructor() { }

  updateCurrentSession(object: Session): string {

    object.id = 25;
    object.date = this.formatDate(object.date);
    return 'hello world';

  }

  formatDate(date: string): string {
    return date.substr(0, 10);
  }
}
