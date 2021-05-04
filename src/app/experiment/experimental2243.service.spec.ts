import { TestBed } from '@angular/core/testing';

import { Experimental2243Service } from './experimental2243.service';

describe('Experimental2243Service', () => {
  let service: Experimental2243Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2243Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
