import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionFormComponent } from './reflection-form.component';

describe('ReflectionFormComponent', () => {
  let component: ReflectionFormComponent;
  let fixture: ComponentFixture<ReflectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
