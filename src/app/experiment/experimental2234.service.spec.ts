import { TestBed } from '@angular/core/testing';

import { Experimental2234Service } from './experimental2234.service';

describe('Experimental2234Service', () => {
  let service: Experimental2234Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2234Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
