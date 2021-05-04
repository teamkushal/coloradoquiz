import { TestBed } from '@angular/core/testing';

import { Experimental3271Service } from './experimental3271.service';

describe('Experimental3271Service', () => {
  let service: Experimental3271Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3271Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
