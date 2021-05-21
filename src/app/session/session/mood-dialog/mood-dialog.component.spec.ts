import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodDialogComponent } from './mood-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';
import {InjectionToken} from '@angular/core';

describe('MoodDialogComponent', () => {
  let component: MoodDialogComponent;
  let fixture: ComponentFixture<MoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodDialogComponent ],
      providers: [ MatDialog, Overlay,
      ],
      imports: [MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
