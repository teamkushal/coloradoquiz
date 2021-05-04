import { TestBed } from '@angular/core/testing';

import { Experimental2579Service } from './experimental2579.service';

describe('Experimental2579Service', () => {
  let service: Experimental2579Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2579Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
