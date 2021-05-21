import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimerComponent} from './timer/timer.component';
import {DisplayTimerComponent} from './timer/display-timer/display-timer.component';
import {TimePipe} from '../pipes/time.pipe';
import { SessionComponent } from './session/session.component';
import {RouterModule} from '@angular/router';
import { ReflectionFormComponent } from './session/reflection-form/reflection-form.component';
import {FormsModule} from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import {MoodDialogComponent} from './session/mood-dialog/mood-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '../material.module';
import {ContentFormComponent} from './session/content-form/content-form.component';
import {MoodDialogOverlayComponent} from './session/mood-dialog-overlay/mood-dialog-overlay.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [TimerComponent, DisplayTimerComponent,  TimePipe, SessionComponent,
    ReflectionFormComponent, ContentFormComponent,
    HistoryComponent, MoodDialogComponent, MoodDialogOverlayComponent],
  imports: [ BrowserAnimationsModule,
    CommonModule, RouterModule, FormsModule, MatDialogModule, MatFormFieldModule, MaterialModule],
  exports: [DisplayTimerComponent, TimerComponent]
})
export class SessionModule { }
