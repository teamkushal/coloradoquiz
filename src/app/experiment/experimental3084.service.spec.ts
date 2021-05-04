import { TestBed } from '@angular/core/testing';

import { Experimental3084Service } from './experimental3084.service';

describe('Experimental3084Service', () => {
  let service: Experimental3084Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3084Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
