import { TestBed } from '@angular/core/testing';

import { Experimental3571Service } from './experimental3571.service';

describe('Experimental3571Service', () => {
  let service: Experimental3571Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3571Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
