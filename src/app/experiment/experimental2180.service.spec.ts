import { TestBed } from '@angular/core/testing';

import { Experimental2180Service } from './experimental2180.service';

describe('Experimental2180Service', () => {
  let service: Experimental2180Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2180Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
