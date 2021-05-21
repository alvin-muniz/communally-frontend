import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


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

@Component({
  selector: 'app-mood-dialog-overlay',
  templateUrl: 'mood-dialog-overlay.html',
  styleUrls: ['./mood-dialog.component.less']
})
export class MoodDialogOverlayComponent {

  constructor(
    public dialogRef: MatDialogRef<MoodDialogOverlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
