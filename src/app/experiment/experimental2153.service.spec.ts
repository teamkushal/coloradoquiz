import { TestBed } from '@angular/core/testing';

import { Experimental2153Service } from './experimental2153.service';

describe('Experimental2153Service', () => {
  let service: Experimental2153Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2153Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
