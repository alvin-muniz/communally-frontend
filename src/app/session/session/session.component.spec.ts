import {ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { SessionComponent } from './session.component';
import {By} from '@angular/platform-browser';
import {TimePipe} from '../../pipes/time.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReflectionService} from '../../service/reflection/reflection.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('SessionComponent', () => {
  let component: SessionComponent;
  let fixture: ComponentFixture<SessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionComponent, TimePipe ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ReflectionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should display only for a logged in user and start a persistSession method', () => {
    fixture.detectChanges();

    // const comp = fixture.componentInstance;
    // spyOn(comp, 'startSession');
    // let startSession = fixture.debugElement.query(By.css('#startSession'));
    // const startButton = fixture.debugElement.query(By.css('#startButton'));
    // expect(startSession).toBeNull(true);
    // expect(startButton).toBeDefined(true);
    // console.log(startSession);
    // console.log(startButton);
    // comp.loggedIn = false;
    // expect(comp.loggedIn).toBe(false);
    // comp.loggedIn = true;
    // expect(comp.loggedIn).toBe(true);
    // expect(startSession).toBeDefined(true);
    // fixture.detectChanges();
    // expect(fixture.debugElement.query(By.css('#startButton'))).toBeFalsy();
    // startSession = fixture.debugElement.query(By.css('#startSession'));
    // startSession.nativeElement.click();
    // expect(comp.startSession).toHaveBeenCalled();
  });

  describe('#newSession', () => {


    it('should call route.navigate("timer"))', inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigate');
      component.newSession();
      fixture.detectChanges();
      const url = spy.calls.first().args[0];
      expect(url[0]).toBe('timer');
    }));
  });

  describe('after session options', () => {
    beforeEach(() => {

      // making sure that current session is not null by setting to one
      // you can see the difference in the fixture if you do not change the value
      component.currentSession = 1;
      fixture.detectChanges();
    });

    it('should have a viewPreviousSessions button', () => {
      const endButton = fixture.debugElement.queryAll(By.css('#previousSessions'));
      expect(endButton.length).toBe(1);
      /***
       *  using .includes because of teh addition of the icons in the span tag.
       */

      expect(endButton[0].nativeElement.innerText.includes('View Previous Sessions')).toBe(true);
    });

    it('should have a startNewSession button', () => {
      const endButton = fixture.debugElement.queryAll(By.css('#newSession'));
      expect(endButton.length).toBe(1);
      expect(endButton[0].nativeElement.innerText.includes('Start New Session')).toBe(true);
    });

  });

  describe('#viewSessions', () => {

    it('should call route.navigate("profile"))', inject([Router], (router: Router) => {
      const spy = spyOn(router, 'navigate');
      component.viewSession();
      fixture.detectChanges();
      const url = spy.calls.first().args[0];
      expect(url[0]).toBe('profile');
    }));
  });
});
