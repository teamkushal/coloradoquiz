import { TestBed } from '@angular/core/testing';

import { Experimental2304Service } from './experimental2304.service';

describe('Experimental2304Service', () => {
  let service: Experimental2304Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2304Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
