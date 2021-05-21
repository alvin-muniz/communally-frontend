import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TimePipe} from '../../pipes/time.pipe';
import {Router} from '@angular/router';
import {SessionService} from '../../service/session/session.service';
import {Session} from '../../api-interface/Session';
import {MoodDialogOverlayComponent} from '../session/mood-dialog-overlay/mood-dialog-overlay.component';
import {MatDialog} from '@angular/material/dialog';
import {Mood} from '../../api-interface/Mood';


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
              private sessionService: SessionService,
              private dialog: MatDialog) {
  }
  // make the time inputs custom for the user so it countsdown


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {this.loggedIn = true;

                console.log('you are starting a logged in session');
                const today = new Date();
                const formatToday = today.toISOString();
                const newSession: Session = {
        id: null,
        date: formatToday,
        duration: null,
        moodBefore: null,
        moodAfter: null
      };
                this.sessionService.updateCurrentSession(newSession);

    }
    else {this.loggedIn = false; }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MoodDialogOverlayComponent, {
      width: '750px',
      height: '500px',
      // Data  for the service
      data: {title: 'What\'s your mood today?', positive: Mood.Positive, negative: Mood.Negative, neutral: Mood.Neutral}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.time);
      if (this.sessionService.getCurrentSession().duration){
        this.sessionService.getCurrentSession().moodAfter = result;
      }else {
        this.sessionService.getCurrentSession().moodBefore = result;
      }
      console.log(Mood[result]);
    });
  }

  startTimer(): void {
    this.sessionService.getCurrentSession().duration = this.time;
    console.log(this.sessionService.getCurrentSession().duration);
    // this.timer = setInterval(() => {
    //   this.time--;
    //   }, 1000);

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
    this.openDialog();
  }

  startSession(): void {
    console.log('you are starting a logged in session');
    // const today = new Date();
    // const formatToday = today.toISOString();
    // const newSession: Session = {
    //   id: null,
    //   date: formatToday,
    //   duration: this.time,
    //   moodBefore: null,
    //   moodAfter: null
    // };

    this.sessionService.getCurrentSession().duration = this.time;
    // this.sessionService.updateCurrentSession(newSession);
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
