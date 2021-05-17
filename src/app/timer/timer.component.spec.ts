import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import {By} from '@angular/platform-browser';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
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
      const endButton = fixture.debugElement.queryAll(By.css('#endButton'));
      expect(endButton.length).toBe(1);
      expect(endButton[0].nativeElement.innerHTML).toBe('End');
    });


  });
});
