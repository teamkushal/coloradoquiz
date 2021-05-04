import { TestBed } from '@angular/core/testing';

import { Experimental829Service } from './experimental829.service';

describe('Experimental829Service', () => {
  let service: Experimental829Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental829Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
