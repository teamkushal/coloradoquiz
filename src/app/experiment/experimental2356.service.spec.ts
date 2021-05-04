import { TestBed } from '@angular/core/testing';

import { Experimental2356Service } from './experimental2356.service';

describe('Experimental2356Service', () => {
  let service: Experimental2356Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2356Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
