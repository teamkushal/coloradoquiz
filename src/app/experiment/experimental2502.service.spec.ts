import { TestBed } from '@angular/core/testing';

import { Experimental2502Service } from './experimental2502.service';

describe('Experimental2502Service', () => {
  let service: Experimental2502Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2502Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
