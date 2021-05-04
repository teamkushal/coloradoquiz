import { TestBed } from '@angular/core/testing';

import { Experimental2256Service } from './experimental2256.service';

describe('Experimental2256Service', () => {
  let service: Experimental2256Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2256Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
