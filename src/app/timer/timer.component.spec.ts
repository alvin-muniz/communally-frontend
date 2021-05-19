import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import {By} from '@angular/platform-browser';
import {TimePipe} from '../pipes/time.pipe';
import {absoluteFromSourceFile} from '@angular/compiler-cli/src/ngtsc/file_system';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent, TimePipe ]
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
    const button = fixture.debugElement.query(By.css('.updateTimeButton')).nativeElement;
    button.click();
    expect(comp.updateTime).toHaveBeenCalled();
    expect(comp.timer).toEqual(5);
  });

  it('should update the timer to the input value', () => {
    fixture.detectChanges();
    const comp = fixture.componentInstance;
    spyOn(comp, 'updateTime').and.callThrough();
    const inputField = fixture.debugElement.query(By.css('#custom-time')).nativeElement;
    inputField.keyup();


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
      const displayTimer = fixture.debugElement.queryAll(By.css('.display-timer'));
      expect(displayTimer.length).toBe(1);
      expect(displayTimer[0].nativeElement.innerHTML).toBe('00:00:00');
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
    it('should have a form field that will allow custom session length', () => {
      const customInput = fixture.debugElement.queryAll(By.css('#custom-time'));
      expect(customInput.length).toBe(1);
      expect(customInput[0].nativeElement.placeholder).toBe('Enter your time here');
    });
  });
});
