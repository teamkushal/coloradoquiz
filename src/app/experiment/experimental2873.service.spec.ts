import { TestBed } from '@angular/core/testing';

import { Experimental2873Service } from './experimental2873.service';

describe('Experimental2873Service', () => {
  let service: Experimental2873Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2873Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
