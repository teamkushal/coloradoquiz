import { TestBed } from '@angular/core/testing';

import { Experimental2140Service } from './experimental2140.service';

describe('Experimental2140Service', () => {
  let service: Experimental2140Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2140Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
