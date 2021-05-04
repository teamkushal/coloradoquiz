import { TestBed } from '@angular/core/testing';

import { Experimental2995Service } from './experimental2995.service';

describe('Experimental2995Service', () => {
  let service: Experimental2995Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2995Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
