import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimerComponent} from './timer/timer.component';
import {DisplayTimerComponent} from './timer/display-timer/display-timer.component';
import {TimePipe} from '../pipes/time.pipe';
import { SessionComponent } from './session/session.component';
import {RouterModule} from '@angular/router';
import { ReflectionFormComponent } from './session/reflection-form/reflection-form.component';
import { ContentTileComponent } from './session/content-tile/content-tile.component';
import {FormsModule} from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import {MoodDialogComponent, MoodDialogOverlayComponent} from './session/mood-dialog/mood-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [TimerComponent, DisplayTimerComponent,  TimePipe, SessionComponent,
    ReflectionFormComponent, ContentTileComponent,
    HistoryComponent, MoodDialogComponent, MoodDialogOverlayComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, MatDialogModule, MatFormFieldModule, MaterialModule
  ],
  exports: [DisplayTimerComponent, TimerComponent]
})
export class SessionModule { }
