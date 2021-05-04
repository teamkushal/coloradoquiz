import { TestBed } from '@angular/core/testing';

import { Experimental2382Service } from './experimental2382.service';

describe('Experimental2382Service', () => {
  let service: Experimental2382Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2382Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
