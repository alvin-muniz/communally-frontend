import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimerComponent} from './timer/timer.component';
import {DisplayTimerComponent} from './timer/display-timer/display-timer.component';
import {TimePipe} from '../pipes/time.pipe';



@NgModule({
  declarations: [TimerComponent, DisplayTimerComponent,  TimePipe],
  imports: [
    CommonModule
  ],
  exports: [DisplayTimerComponent, TimerComponent]
})
export class SessionModule { }
