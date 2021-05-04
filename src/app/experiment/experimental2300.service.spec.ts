import { TestBed } from '@angular/core/testing';

import { Experimental2300Service } from './experimental2300.service';

describe('Experimental2300Service', () => {
  let service: Experimental2300Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2300Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
