import { TestBed } from '@angular/core/testing';

import { Experimental3149Service } from './experimental3149.service';

describe('Experimental3149Service', () => {
  let service: Experimental3149Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3149Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
