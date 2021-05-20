import {Injectable} from '@angular/core';
import {Mood} from '../../api-interface/Mood';
import {Session} from '../../api-interface/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private currentSession: Session;

  constructor() {
    /** Only called once*/
    console.log('currentSession constructor for service');

  }

  getCurrentSession(): Session {
    console.log(this.currentSession);
    return this.currentSession;
  }

  updateCurrentSession(newSession: Session): void{

    newSession.date = this.formatDate(newSession.date);
    this.currentSession = newSession;
    console.log(this.currentSession, 'CURRENT SESSION!');

  }

  formatDate(date: string): string {
    return date.substr(0, 10);
  }
}
