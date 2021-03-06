import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reflection} from '../../api-interface/Reflection';

@Injectable({
  providedIn: 'root'
})
export class ReflectionService {

  BASE_URL = 'https://communally-backend-sei.herokuapp.com';
  // DEV_BASE_URL = 'http://localhost:9092';

  private currentReflection: Reflection;


  constructor(private http: HttpClient) {
  }

  saveReflection(reflection: Reflection, sessionId: number): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post(`${this.BASE_URL}/api/sessions/${sessionId}/reflections`, reflection, requestOptions);
  }


  saveReflectionContent(reflectionId: number, sessionId: number, content): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post(`${this.BASE_URL}/api/sessions/${sessionId}/reflections/${reflectionId}/content`, content, requestOptions);
  }

  getCurrentReflection(): Reflection {
    console.log(this.currentReflection, 'Reflection Service current reflection ');
    return this.currentReflection;
  }

  setCurrentReflection(reflection: Reflection): void {
    this.currentReflection = reflection;
  }

  getReflectionBySessionId(sessionId): any{
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.get(`${this.BASE_URL}/api/sessions/reflections`, requestOptions);

  }


}
