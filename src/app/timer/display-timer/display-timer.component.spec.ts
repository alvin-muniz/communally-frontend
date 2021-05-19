import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimerComponent } from './display-timer.component';
import {By} from '@angular/platform-browser';
import {TimerComponent} from '../timer.component';
import {TimePipe} from '../../pipes/time.pipe';

describe('DisplayTimerComponent', () => {
  let component: DisplayTimerComponent;
  let fixture: ComponentFixture<DisplayTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTimerComponent, TimePipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the time', () => {
    const displayTimer = fixture.debugElement.queryAll(By.css('.display-timer'));
    expect(displayTimer.length).toBe(1);
    console.log(displayTimer[0].nativeElement.innerHTML);
    component.time = 0;
    fixture.detectChanges();
    expect(displayTimer[0].nativeElement.innerHTML).toBe('00:00:00');
  });
});
