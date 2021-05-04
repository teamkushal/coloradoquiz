import { TestBed } from '@angular/core/testing';

import { Experimental2943Service } from './experimental2943.service';

describe('Experimental2943Service', () => {
  let service: Experimental2943Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2943Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
