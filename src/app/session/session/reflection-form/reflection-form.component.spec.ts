import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionFormComponent } from './reflection-form.component';
import {SessionService} from '../../../service/session/session.service';
import {ReflectionService} from '../../../service/reflection/reflection.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ReflectionFormComponent', () => {
  let component: ReflectionFormComponent;
  let fixture: ComponentFixture<ReflectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflectionFormComponent ],
      providers: [SessionService, ReflectionService],
      imports: [HttpClientTestingModule]
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
