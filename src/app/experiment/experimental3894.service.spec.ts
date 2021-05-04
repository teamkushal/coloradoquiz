import { TestBed } from '@angular/core/testing';

import { Experimental3894Service } from './experimental3894.service';

describe('Experimental3894Service', () => {
  let service: Experimental3894Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3894Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
