import { TestBed } from '@angular/core/testing';

import { Experimental3170Service } from './experimental3170.service';

describe('Experimental3170Service', () => {
  let service: Experimental3170Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3170Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
