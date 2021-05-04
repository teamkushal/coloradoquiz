import { TestBed } from '@angular/core/testing';

import { Experimental2305Service } from './experimental2305.service';

describe('Experimental2305Service', () => {
  let service: Experimental2305Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2305Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
