import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {TimerComponent} from './session/timer/timer.component';
import {SessionComponent} from './session/session/session.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginFormComponent
  },
  {
  path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
