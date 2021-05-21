import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TimePipe} from '../../pipes/time.pipe';
import {Router} from '@angular/router';
import {SessionService} from '../../service/session/session.service';
import {Session} from '../../api-interface/Session';
import {MoodDialogOverlayComponent} from '../session/mood-dialog-overlay/mood-dialog-overlay.component';
import {MatDialog} from '@angular/material/dialog';
import {Mood} from '../../api-interface/Mood';
import {Subscription} from 'rxjs';


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

  session: Session;
  subscription: Subscription;


  constructor(private timePipe: TimePipe,
              private router: Router,
              private sessionService: SessionService,
              private dialog: MatDialog) {
  }
  // make the time inputs custom for the user so it countsdown


  ngOnInit(): void {
    this.subscription = this.sessionService.currentSeshion.subscribe(session => this.session = session);

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
                this.sessionService.changeSession(newSession);
                // console.log(this.session, 'FROM THE BEHAVIOUR SUBJECT');
    }
    else {this.loggedIn = false; }
  }

  openDialog(): void {
    let title = 'What\'s your mood today?';
    if (this.sessionService.getCurrentSession().duration) {
      title = 'Now that you\'ve shown up for yourself, what\'s your mood now?';
    }
    const dialogRef = this.dialog.open(MoodDialogOverlayComponent, {
      width: '750px',
      height: '500px',
      // Data  for the service
      data: {title: `${title}`, positive: Mood.Positive, negative: Mood.Negative, neutral: Mood.Neutral}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.time);
      if (this.sessionService.getCurrentSession().duration){
        this.sessionService.getCurrentSession().moodAfter = result;
        this.sessionService.changeSession(this.sessionService.getCurrentSession());
        console.log(this.session, 'FROM BEHAVIOUR SUBJECT');
      }else {
        this.sessionService.getCurrentSession().moodBefore = result;
        this.sessionService.changeSession(this.sessionService.getCurrentSession());
        console.log(this.session, 'FROM BEHAVIOUR SUBJECT');
      }

    });
  }

  startTimer(): void {
    this.sessionService.getCurrentSession().duration = this.time;
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
    if(this.loggedIn)
      {this.openDialog();}
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
      this.openDialog();

      this.router.navigate(['session']);
    } else {
      this.stopTimer();
    }
  }


}
