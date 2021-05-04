import { TestBed } from '@angular/core/testing';

import { Experimental3503Service } from './experimental3503.service';

describe('Experimental3503Service', () => {
  let service: Experimental3503Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3503Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
