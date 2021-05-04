import { TestBed } from '@angular/core/testing';

import { Experimental3429Service } from './experimental3429.service';

describe('Experimental3429Service', () => {
  let service: Experimental3429Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3429Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
