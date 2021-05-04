import { TestBed } from '@angular/core/testing';

import { Experimental2224Service } from './experimental2224.service';

describe('Experimental2224Service', () => {
  let service: Experimental2224Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2224Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
