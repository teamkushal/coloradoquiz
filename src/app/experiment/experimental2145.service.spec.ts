import { TestBed } from '@angular/core/testing';

import { Experimental2145Service } from './experimental2145.service';

describe('Experimental2145Service', () => {
  let service: Experimental2145Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2145Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
