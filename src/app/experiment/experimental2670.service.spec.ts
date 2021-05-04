import { TestBed } from '@angular/core/testing';

import { Experimental2670Service } from './experimental2670.service';

describe('Experimental2670Service', () => {
  let service: Experimental2670Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2670Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
