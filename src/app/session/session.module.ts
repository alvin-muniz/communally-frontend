import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimerComponent} from './timer/timer.component';
import {DisplayTimerComponent} from './timer/display-timer/display-timer.component';
import {TimePipe} from '../pipes/time.pipe';
import { SessionComponent } from './session/session.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TimerComponent, DisplayTimerComponent,  TimePipe, SessionComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [DisplayTimerComponent, TimerComponent]
})
export class SessionModule { }
