import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reflection} from '../../api-interface/Reflection';

@Injectable({
  providedIn: 'root'
})
export class ReflectionService {

  // BASE_URL = 'https://communally-backend-sei.herokuapp.com';
  DEV_BASE_URL = 'http://localhost:9092';


  constructor(private http: HttpClient) {
  }

  saveReflection(reflection: Reflection, sessionId: number): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http.post(`${this.DEV_BASE_URL}/api/sessions/${sessionId}/reflections`, reflection, requestOptions);
  }


}
