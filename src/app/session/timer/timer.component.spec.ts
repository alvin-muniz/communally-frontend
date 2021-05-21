import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import {By} from '@angular/platform-browser';
import {TimePipe} from '../../pipes/time.pipe';
import {DisplayTimerComponent} from './display-timer/display-timer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Router} from '@angular/router';
import {SessionService} from '../../service/session/session.service';
import {Mood} from '../../api-interface/Mood';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent, TimePipe, DisplayTimerComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule, BrowserAnimationsModule],
      providers: [MatDialog, Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pause a startTime() event', () => {
    fixture.detectChanges();

    const comp = fixture.componentInstance;
    spyOn(comp, 'pauseTimer');
    const button = fixture.debugElement.query(By.css('#pauseButton')).nativeElement;
    button.click();
    expect(comp.pauseTimer).toHaveBeenCalled();

  });

  it('should end a startTime() event', () => {
    fixture.detectChanges();

    const comp = fixture.componentInstance;
    spyOn(comp, 'stopTimer');
    const button = fixture.debugElement.query(By.css('#stopButton')).nativeElement;
    button.click();
    expect(comp.stopTimer).toHaveBeenCalled();

  });

  it('should update the timer to the value needed', () => {
    fixture.detectChanges();
    const comp = fixture.componentInstance;
    spyOn(comp, 'updateTime').and.callThrough();
    const button = fixture.debugElement.queryAll(By.css('.updateTimeButton'));
    for (const object of button)
    {
      object.nativeElement.click();
      expect(comp.updateTime).toHaveBeenCalled();
      // TODO update comp.tome === 300
      expect(comp.time === 5 || comp.time === 600 || comp.time === 1200).toBeTruthy();
    }
  });

  it('it should display only for a logged in user and start a persistSession method', () => {
    fixture.detectChanges();

    const comp = fixture.componentInstance;
    spyOn(comp, 'startSession');
    let startSession = fixture.debugElement.query(By.css('#startSession'));
    const startButton = fixture.debugElement.query(By.css('#startButton'));
    expect(startSession).toBeNull(true);
    expect(startButton).toBeDefined(true);
    console.log(startSession);
    console.log(startButton);
    comp.loggedIn = false;
    expect(comp.loggedIn).toBe(false);
    comp.loggedIn = true;
    expect(comp.loggedIn).toBe(true);
    expect(startSession).toBeDefined(true);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#startButton'))).toBeFalsy();
    startSession = fixture.debugElement.query(By.css('#startSession'));
    startSession.nativeElement.click();
    expect(comp.startSession).toHaveBeenCalled();
  });

  describe('#startSession', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });
    it('should call #updateCurrentSession from sessionService',  inject([SessionService], (sessionService: SessionService) => {
      const comp = fixture.componentInstance;
      spyOn(comp, 'startSession').and.callThrough();
      spyOn(sessionService,  'updateCurrentSession').and.callThrough();
      spyOn(sessionService, 'formatDate').and.callThrough();

      sessionService.getCurrentSession().duration = String(1);

      comp.startSession();
      const mockSession = {
        id: null,
        date: '2021-05-20T02:47:34.551Z',
        duration: null,
        moodBefore: Mood.Positive,
        moodAfter: Mood.Negative
      };
      mockSession.duration = 100;
      sessionService.updateCurrentSession(mockSession);
      expect(sessionService.updateCurrentSession).toHaveBeenCalledWith(mockSession);
      expect(comp.startSession).toHaveBeenCalled();
      expect(sessionService.formatDate).toHaveBeenCalledWith('2021-05-20T02:47:34.551Z');

    }));

  });

  // describe('#setSessionTime', () => {
  //   beforeEach(() => {
  //     fixture.detectChanges();
  //   });
  //   it('should #setSessionTime with the userService',  inject([SessionService], (sessionService: SessionService) => {
  //     const comp = fixture.componentInstance;
  //     spyOn(sessionService,  'updateCurrentSession').and.callThrough();
  //     spyOn(sessionService, 'formatDate').and.callThrough();
  //
  //     comp.setSessionTime(600);
  //     const mockSession = {
  //       id: null,
  //       date: '2021-05-20T02:47:34.551Z',
  //       duration: null,
  //       moodBefore: Mood.Positive,
  //       moodAfter: Mood.Negative
  //     };
  //
  //     sessionService.updateCurrentSession(mockSession);
  //     expect(sessionService.updateCurrentSession).toHaveBeenCalledWith(mockSession);
  //     expect(comp.startSession).toHaveBeenCalled();
  //     expect(sessionService.formatDate).toHaveBeenCalledWith('2021-05-20T02:47:34.551Z');
  //
  //   }));
  //
  // });


    /* Routing Testing Example*/
  // describe('#isFinished', () => {
  //
  //
  //   it('should call route.navigate("session"))', inject([Router], (router: Router) => {
  //         const spy = spyOn(router, 'navigate');
  //         component.loggedIn = true;
  //         component.timerFinished(true);
  //
  //         console.log(component.loggedIn, 'logged in component');
  //
  //         fixture.detectChanges();
  //         const url = spy.calls.first().args[0];
  //         expect(url[0]).toBe('session');
  //     }));
  // });

    // it('should update the timer to the value needed', () => {
    //   fixture.detectChanges();
    //   const comp = fixture.componentInstance;
    //   spyOn(comp, 'updateTime').and.callThrough();
    //   const button = fixture.debugElement.queryAll(By.css('.updateTimeButton'));
    //   for (const object of button)
    //   {
    //     object.nativeElement.click();
    //     expect(comp.updateTime).toHaveBeenCalled();
    //     // TODO update comp.tome === 300
    //     expect(comp.time === 5 || comp.time === 600 || comp.time === 1200).toBeTruthy();
    //   }
    // });









  describe('Render', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have a title', () => {
      const titleElements = fixture.debugElement.queryAll(By.css('h1'));
      expect(titleElements.length).toBe(1);
      expect(titleElements[0].nativeElement.innerHTML).toBe('Meditation Timer');
    });

    it('should have a start button', () => {
      const startButton = fixture.debugElement.queryAll(By.css('#startButton'));
      expect(startButton.length).toBe(1);
      expect(startButton[0].nativeElement.innerHTML).toBe('Start');
    } );

    it('should have a pause button', () => {
      const pauseButton = fixture.debugElement.queryAll(By.css('#pauseButton'));
      expect(pauseButton.length).toBe(1);
      expect(pauseButton[0].nativeElement.innerHTML).toBe('Pause');
    } );

    it('should have an end button', () => {
      const endButton = fixture.debugElement.queryAll(By.css('#stopButton'));
      expect(endButton.length).toBe(1);
      expect(endButton[0].nativeElement.innerHTML).toBe('End');
    });

    it('should have a a timer', () => {
      const displayTimer = fixture.debugElement.nativeElement.querySelector('app-display-timer');
      expect(displayTimer).toBeTruthy();
    });

    it('should have 3 buttons that will assert the length of session', () => {
      const fiveMinutes = fixture.debugElement.queryAll(By.css('#five-minute'));
      const tenMinutes = fixture.debugElement.queryAll(By.css('#ten-minute'));
      const twentyMinutes = fixture.debugElement.queryAll(By.css('#twenty-minute'));
      expect(fiveMinutes.length).toBe(1);
      expect(tenMinutes.length).toBe(1);
      expect(twentyMinutes.length).toBe(1);
      expect(fiveMinutes[0].nativeElement.innerHTML).toBe('5 minutes');
      expect(tenMinutes[0].nativeElement.innerHTML).toBe('10 minutes');
      expect(twentyMinutes[0].nativeElement.innerHTML).toBe('20 minutes');
    });
  });
});
