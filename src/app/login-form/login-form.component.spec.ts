import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {By} from '@angular/platform-browser';
import {UserService} from '../service/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [UserService],
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
