import { TestBed } from '@angular/core/testing';

import { Experimental2052Service } from './experimental2052.service';

describe('Experimental2052Service', () => {
  let service: Experimental2052Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2052Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
