import { TestBed } from '@angular/core/testing';

import { Experimental2440Service } from './experimental2440.service';

describe('Experimental2440Service', () => {
  let service: Experimental2440Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2440Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
