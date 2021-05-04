import { TestBed } from '@angular/core/testing';

import { Experimental3499Service } from './experimental3499.service';

describe('Experimental3499Service', () => {
  let service: Experimental3499Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3499Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
