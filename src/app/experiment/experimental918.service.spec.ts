import { TestBed } from '@angular/core/testing';

import { Experimental918Service } from './experimental918.service';

describe('Experimental918Service', () => {
  let service: Experimental918Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental918Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
