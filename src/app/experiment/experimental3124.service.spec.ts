import { TestBed } from '@angular/core/testing';

import { Experimental3124Service } from './experimental3124.service';

describe('Experimental3124Service', () => {
  let service: Experimental3124Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3124Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
