import { TestBed } from '@angular/core/testing';

import { Experimental2047Service } from './experimental2047.service';

describe('Experimental2047Service', () => {
  let service: Experimental2047Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2047Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
