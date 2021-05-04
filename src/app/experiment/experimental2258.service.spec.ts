import { TestBed } from '@angular/core/testing';

import { Experimental2258Service } from './experimental2258.service';

describe('Experimental2258Service', () => {
  let service: Experimental2258Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2258Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
