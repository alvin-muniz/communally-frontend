import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TimePipe} from '../../pipes/time.pipe';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less'],
  providers: [TimePipe]
})
export class TimerComponent implements OnInit{


  time: any = 0;
  timer: any;
  loggedIn: boolean;
  changeLog: string[] = [];

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
    this.time = updatedTime;
  }

  startSession(): void {
    console.log('you are starting a logged in session');
    this.timer = setInterval(() => {
      this.time--;
    }, 1000);
  }

  timerFinished(isFinished: boolean): void {
    console.log('timer finished called!');
    this.stopTimer();
  }

}
