import { TestBed } from '@angular/core/testing';

import { Experimental2316Service } from './experimental2316.service';

describe('Experimental2316Service', () => {
  let service: Experimental2316Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2316Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
