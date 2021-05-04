import { TestBed } from '@angular/core/testing';

import { Experimental3871Service } from './experimental3871.service';

describe('Experimental3871Service', () => {
  let service: Experimental3871Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3871Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
