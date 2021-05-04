import { TestBed } from '@angular/core/testing';

import { Experimental3180Service } from './experimental3180.service';

describe('Experimental3180Service', () => {
  let service: Experimental3180Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3180Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
