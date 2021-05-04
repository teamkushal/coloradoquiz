import { TestBed } from '@angular/core/testing';

import { Experimental2045Service } from './experimental2045.service';

describe('Experimental2045Service', () => {
  let service: Experimental2045Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2045Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
