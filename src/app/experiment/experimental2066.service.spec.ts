import { TestBed } from '@angular/core/testing';

import { Experimental2066Service } from './experimental2066.service';

describe('Experimental2066Service', () => {
  let service: Experimental2066Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2066Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
