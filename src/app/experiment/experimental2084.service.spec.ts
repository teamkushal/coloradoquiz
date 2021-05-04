import { TestBed } from '@angular/core/testing';

import { Experimental2084Service } from './experimental2084.service';

describe('Experimental2084Service', () => {
  let service: Experimental2084Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2084Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
