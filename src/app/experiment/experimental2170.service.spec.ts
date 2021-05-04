import { TestBed } from '@angular/core/testing';

import { Experimental2170Service } from './experimental2170.service';

describe('Experimental2170Service', () => {
  let service: Experimental2170Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2170Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
