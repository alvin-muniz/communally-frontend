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
  });
});
