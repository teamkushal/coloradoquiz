import { TestBed } from '@angular/core/testing';

import { Experimental2124Service } from './experimental2124.service';

describe('Experimental2124Service', () => {
  let service: Experimental2124Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2124Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
