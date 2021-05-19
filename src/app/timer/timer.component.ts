import { Component, OnInit } from '@angular/core';
import {TimePipe} from '../pipes/time.pipe';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less'],
  providers: [TimePipe]
})
export class TimerComponent implements OnInit {


  time: any = 0;
  timer: any;
  loggedIn: boolean;

  constructor(private timePipe: TimePipe) {
  }

  // make the time inputs custom for the user so it countsdown


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {this.loggedIn = true; }
    else {this.loggedIn = false; }
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      console.log('time is called');
      console.log(this.time);
      this.time--;
      }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.timer);
  }

  stopTimer(): void {
    clearInterval(this.timer);
    this.timer = 0;
    this.time = 0;
  }

  updateTime(updatedTime: any): any {
    console.log(updatedTime + 'console logging input time');
    this.time = (updatedTime * 3)* updatedTime;
  }

  updateTimeEvent(updatedTime: any): any {
    console.log(updatedTime + 'console logging input time');


    this.timer = updatedTime;

  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  startSession(): void {
    this.timer = setInterval(() => {
      console.log('time is called');
      console.log(this.time);
      this.time--;
    }, 1000);

  }

}
