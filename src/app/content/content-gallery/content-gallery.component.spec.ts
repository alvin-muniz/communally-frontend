import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGalleryComponent } from './content-gallery.component';

describe('ContentGalleryComponent', () => {
  let component: ContentGalleryComponent;
  let fixture: ComponentFixture<ContentGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
