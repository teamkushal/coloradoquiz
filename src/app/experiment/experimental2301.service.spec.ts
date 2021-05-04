import { TestBed } from '@angular/core/testing';

import { Experimental2301Service } from './experimental2301.service';

describe('Experimental2301Service', () => {
  let service: Experimental2301Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2301Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
