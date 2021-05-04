import { TestBed } from '@angular/core/testing';

import { Experimental3454Service } from './experimental3454.service';

describe('Experimental3454Service', () => {
  let service: Experimental3454Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3454Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
