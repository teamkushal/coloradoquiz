import { TestBed } from '@angular/core/testing';

import { Experimental2360Service } from './experimental2360.service';

describe('Experimental2360Service', () => {
  let service: Experimental2360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
