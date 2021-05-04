import { TestBed } from '@angular/core/testing';

import { Experimental3168Service } from './experimental3168.service';

describe('Experimental3168Service', () => {
  let service: Experimental3168Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3168Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
