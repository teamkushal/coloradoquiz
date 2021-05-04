import { TestBed } from '@angular/core/testing';

import { Experimental2263Service } from './experimental2263.service';

describe('Experimental2263Service', () => {
  let service: Experimental2263Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2263Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
