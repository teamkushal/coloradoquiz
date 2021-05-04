import { TestBed } from '@angular/core/testing';

import { Experimental3562Service } from './experimental3562.service';

describe('Experimental3562Service', () => {
  let service: Experimental3562Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3562Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
