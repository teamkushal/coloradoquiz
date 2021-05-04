import { TestBed } from '@angular/core/testing';

import { Experimental2041Service } from './experimental2041.service';

describe('Experimental2041Service', () => {
  let service: Experimental2041Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2041Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
