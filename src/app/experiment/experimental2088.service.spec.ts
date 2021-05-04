import { TestBed } from '@angular/core/testing';

import { Experimental2088Service } from './experimental2088.service';

describe('Experimental2088Service', () => {
  let service: Experimental2088Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2088Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
