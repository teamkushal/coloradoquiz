import { TestBed } from '@angular/core/testing';

import { Experimental2199Service } from './experimental2199.service';

describe('Experimental2199Service', () => {
  let service: Experimental2199Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2199Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
