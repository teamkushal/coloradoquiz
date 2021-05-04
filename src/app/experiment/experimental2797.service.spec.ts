import { TestBed } from '@angular/core/testing';

import { Experimental2797Service } from './experimental2797.service';

describe('Experimental2797Service', () => {
  let service: Experimental2797Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2797Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
