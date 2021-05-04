import { TestBed } from '@angular/core/testing';

import { Experimental3199Service } from './experimental3199.service';

describe('Experimental3199Service', () => {
  let service: Experimental3199Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3199Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
