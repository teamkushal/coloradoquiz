import { TestBed } from '@angular/core/testing';

import { Experimental2803Service } from './experimental2803.service';

describe('Experimental2803Service', () => {
  let service: Experimental2803Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2803Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
