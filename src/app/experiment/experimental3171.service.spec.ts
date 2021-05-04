import { TestBed } from '@angular/core/testing';

import { Experimental3171Service } from './experimental3171.service';

describe('Experimental3171Service', () => {
  let service: Experimental3171Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3171Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
