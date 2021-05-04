import { TestBed } from '@angular/core/testing';

import { Experimental3242Service } from './experimental3242.service';

describe('Experimental3242Service', () => {
  let service: Experimental3242Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3242Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
