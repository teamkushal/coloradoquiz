import { TestBed } from '@angular/core/testing';

import { Experimental2292Service } from './experimental2292.service';

describe('Experimental2292Service', () => {
  let service: Experimental2292Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2292Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
