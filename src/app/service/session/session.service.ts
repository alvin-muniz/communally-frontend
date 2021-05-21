import {Injectable} from '@angular/core';
import {Session} from '../../api-interface/Session';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Mood} from '../../api-interface/Mood';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SessionService {
  //
  BASE_URL = 'https://communally-backend-sei.herokuapp.com';
  // DEV_BASE_URL = 'http://localhost:9092';



  private currentSession: any = {
    id: null,
    date: '',
    duration: '',
    moodBefore: null,
    moodAfter: null
  };
  private messageSource = new BehaviorSubject(this.currentSession);
  currentSeshion = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    console.log('currentSession constructor for service');
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  changeSession(session: any): void{
    this.messageSource.next(session);
  }

  getAllSessions(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.get<Session>(`${this.BASE_URL}/api/sessions`, requestOptions);
  }



  saveSession(session: Session): any {

    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post<Session>(`${this.BASE_URL}/api/sessions`,
      this.currentSession, requestOptions);
  }



  updateCurrentSession(newSession: Session): void{

    newSession.date = this.formatDate(newSession.date);
    this.currentSession = newSession;

  }

  formatDate(date: string): string {
    return date.substr(0, 10);
  }
}
