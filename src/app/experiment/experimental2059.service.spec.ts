import { TestBed } from '@angular/core/testing';

import { Experimental2059Service } from './experimental2059.service';

describe('Experimental2059Service', () => {
  let service: Experimental2059Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2059Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
