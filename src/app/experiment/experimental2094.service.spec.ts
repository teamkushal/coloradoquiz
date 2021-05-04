import { TestBed } from '@angular/core/testing';

import { Experimental2094Service } from './experimental2094.service';

describe('Experimental2094Service', () => {
  let service: Experimental2094Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2094Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
