import { TestBed } from '@angular/core/testing';

import { Experimental2453Service } from './experimental2453.service';

describe('Experimental2453Service', () => {
  let service: Experimental2453Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2453Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
