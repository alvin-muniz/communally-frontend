import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Mood} from '../../../api-interface/Mood';

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
export class MoodDialogOverlayComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MoodDialogOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
