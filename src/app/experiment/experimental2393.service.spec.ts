import { TestBed } from '@angular/core/testing';

import { Experimental2393Service } from './experimental2393.service';

describe('Experimental2393Service', () => {
  let service: Experimental2393Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2393Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
