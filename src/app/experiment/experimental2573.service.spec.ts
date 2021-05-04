import { TestBed } from '@angular/core/testing';

import { Experimental2573Service } from './experimental2573.service';

describe('Experimental2573Service', () => {
  let service: Experimental2573Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2573Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
