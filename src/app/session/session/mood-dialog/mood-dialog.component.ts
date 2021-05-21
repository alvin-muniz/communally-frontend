import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MoodDialogOverlayComponent} from '../mood-dialog-overlay/mood-dialog-overlay.component';


@Component({
  selector: 'app-mood-dialog',
  templateUrl: './mood-dialog.component.html',
  styleUrls: ['./mood-dialog.component.less']
})


export class MoodDialogComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MoodDialogOverlayComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
