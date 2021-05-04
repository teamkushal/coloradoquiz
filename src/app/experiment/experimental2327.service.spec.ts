import { TestBed } from '@angular/core/testing';

import { Experimental2327Service } from './experimental2327.service';

describe('Experimental2327Service', () => {
  let service: Experimental2327Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2327Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
