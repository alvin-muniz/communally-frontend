import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimerComponent} from './timer/timer.component';
import {DisplayTimerComponent} from './timer/display-timer/display-timer.component';
import {TimePipe} from '../pipes/time.pipe';
import { SessionComponent } from './session/session.component';
import {RouterModule} from '@angular/router';
import { ReflectionFormComponent } from './session/reflection-form/reflection-form.component';



@NgModule({
  declarations: [TimerComponent, DisplayTimerComponent,  TimePipe, SessionComponent, ReflectionFormComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [DisplayTimerComponent, TimerComponent]
})
export class SessionModule { }
