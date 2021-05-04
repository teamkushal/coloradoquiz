import { TestBed } from '@angular/core/testing';

import { Experimental3862Service } from './experimental3862.service';

describe('Experimental3862Service', () => {
  let service: Experimental3862Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3862Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
