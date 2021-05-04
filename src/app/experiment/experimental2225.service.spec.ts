import { TestBed } from '@angular/core/testing';

import { Experimental2225Service } from './experimental2225.service';

describe('Experimental2225Service', () => {
  let service: Experimental2225Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2225Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
