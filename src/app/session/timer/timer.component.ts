import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TimePipe} from '../../pipes/time.pipe';
import {Router} from '@angular/router';
import {SessionService} from '../../service/session/session.service';
import {Session} from '../../api-interface/Session';


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


  constructor(private timePipe: TimePipe,
              private router: Router,
              private sessionService: SessionService) {
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
    const today = new Date();
    const formatToday = today.toISOString();
    const newSession: Session = {
      id: null,
      date: formatToday,
      duration: this.time,
      moodBefore: null,
      moodAfter: null
    };

    this.sessionService.updateCurrentSession(newSession);
    this.timer = setInterval(() => {
      this.time--;
    }, 1000);
  }

  timerFinished(isFinished: boolean): void {

    if ( isFinished && this.loggedIn ) {
      this.stopTimer();

      this.router.navigate(['session']);
    } else {
      this.stopTimer();
    }
  }


}
