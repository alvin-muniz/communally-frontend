import { TestBed } from '@angular/core/testing';

import { ReflectionService } from './reflection.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ReflectionService', () => {
  let service: ReflectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReflectionService]
    });
    service = TestBed.inject(ReflectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
