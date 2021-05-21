import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Mood} from '../../../api-interface/Mood';
import {Session} from '../../../api-interface/Session';
import {Subscription} from 'rxjs';
import {SessionService} from '../../../service/session/session.service';

export interface DialogData {

  title: string;
  positive: Mood;
  negative: Mood;
  neutral: Mood;
}


@Component({
  selector: 'app-mood-dialog-overlay',
  templateUrl: './mood-dialog-overlay.component.html',
  styleUrls: ['./mood-dialog-overlay.component.less']
})
export class MoodDialogOverlayComponent implements OnInit, OnDestroy {

  session: Session;
  subscription: Subscription;

  constructor(
    private sessionService: SessionService,
    public dialogRef: MatDialogRef<MoodDialogOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.subscription = this.sessionService.currentSeshion.subscribe(session => this.session = session);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
