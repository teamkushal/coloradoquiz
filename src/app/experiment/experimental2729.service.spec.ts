import { TestBed } from '@angular/core/testing';

import { Experimental2729Service } from './experimental2729.service';

describe('Experimental2729Service', () => {
  let service: Experimental2729Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2729Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
