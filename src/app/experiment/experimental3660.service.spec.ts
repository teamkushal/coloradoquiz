import { TestBed } from '@angular/core/testing';

import { Experimental3660Service } from './experimental3660.service';

describe('Experimental3660Service', () => {
  let service: Experimental3660Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3660Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
