import { TestBed } from '@angular/core/testing';

import { Experimental3444Service } from './experimental3444.service';

describe('Experimental3444Service', () => {
  let service: Experimental3444Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3444Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
