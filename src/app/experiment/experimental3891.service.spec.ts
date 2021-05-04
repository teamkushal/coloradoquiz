import { TestBed } from '@angular/core/testing';

import { Experimental3891Service } from './experimental3891.service';

describe('Experimental3891Service', () => {
  let service: Experimental3891Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3891Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
