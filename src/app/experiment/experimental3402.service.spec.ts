import { TestBed } from '@angular/core/testing';

import { Experimental3402Service } from './experimental3402.service';

describe('Experimental3402Service', () => {
  let service: Experimental3402Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3402Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
