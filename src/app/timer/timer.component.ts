import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit {


  time = 0;
  timer;
  loggedIn: boolean;

  constructor() {
  }

  //make the time inputs custom for the user so it countsdown


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {this.loggedIn = true;}
    else {this.loggedIn = false;}
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      console.log('time is called');
      console.log(this.time);
      this.time++;
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

  updateTime(updatedTime: number): void {
    this.timer = updatedTime;
  }

  startSession(): void {


  }

}
