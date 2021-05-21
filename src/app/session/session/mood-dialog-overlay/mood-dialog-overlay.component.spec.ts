import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodDialogOverlayComponent } from './mood-dialog-overlay.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {InjectionToken} from '@angular/core';

describe('MoodDialogOverlayComponent', () => {
  let component: MoodDialogOverlayComponent;
  let fixture: ComponentFixture<MoodDialogOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodDialogOverlayComponent],
      providers: [ MatDialog, Overlay, {provide : MatDialogRef, useValue : {}}, { provide: MAT_DIALOG_DATA, useValue: {} }],
      imports: [MatDialogModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodDialogOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
