import { TestBed } from '@angular/core/testing';

import { Experimental3275Service } from './experimental3275.service';

describe('Experimental3275Service', () => {
  let service: Experimental3275Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3275Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
