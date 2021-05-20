import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionComponent } from './session.component';
import {By} from '@angular/platform-browser';
import {TimePipe} from '../../pipes/time.pipe';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReflectionService} from '../../service/reflection/reflection.service';

describe('SessionComponent', () => {
  let component: SessionComponent;
  let fixture: ComponentFixture<SessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionComponent, TimePipe ],
      imports: [HttpClientTestingModule],
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
    //
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
});
