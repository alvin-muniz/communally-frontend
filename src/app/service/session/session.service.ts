import {Injectable} from '@angular/core';
import {Session} from '../../api-interface/Session';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SessionService {
  //
  // BASE_URL = 'https://communally-backend-sei.herokuapp.com';
  DEV_BASE_URL = 'http://localhost:9092';


  private currentSession: Session;

  constructor(private http: HttpClient) {
    console.log('currentSession constructor for service');
  }

  getCurrentSession(): Session {
    console.log(this.currentSession);
    return this.currentSession;
  }

  saveSession(session: Session): any {
    console.log(session);

    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post<Session>(`${this.DEV_BASE_URL}/api/sessions`,
      this.currentSession, requestOptions);
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
