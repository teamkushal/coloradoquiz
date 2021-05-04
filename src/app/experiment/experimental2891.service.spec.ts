import { TestBed } from '@angular/core/testing';

import { Experimental2891Service } from './experimental2891.service';

describe('Experimental2891Service', () => {
  let service: Experimental2891Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2891Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
