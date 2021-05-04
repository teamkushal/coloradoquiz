import { TestBed } from '@angular/core/testing';

import { Experimental3298Service } from './experimental3298.service';

describe('Experimental3298Service', () => {
  let service: Experimental3298Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3298Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
