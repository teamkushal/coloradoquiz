import { TestBed } from '@angular/core/testing';

import { Experimental3074Service } from './experimental3074.service';

describe('Experimental3074Service', () => {
  let service: Experimental3074Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3074Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
