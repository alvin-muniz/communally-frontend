import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {TimerComponent} from './session/timer/timer.component';

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
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
