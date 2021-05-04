import { TestBed } from '@angular/core/testing';

import { Experimental2342Service } from './experimental2342.service';

describe('Experimental2342Service', () => {
  let service: Experimental2342Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2342Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
