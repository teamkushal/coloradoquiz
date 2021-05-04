import { TestBed } from '@angular/core/testing';

import { Experimental3409Service } from './experimental3409.service';

describe('Experimental3409Service', () => {
  let service: Experimental3409Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3409Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
