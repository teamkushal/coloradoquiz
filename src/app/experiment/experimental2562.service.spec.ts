import { TestBed } from '@angular/core/testing';

import { Experimental2562Service } from './experimental2562.service';

describe('Experimental2562Service', () => {
  let service: Experimental2562Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2562Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
