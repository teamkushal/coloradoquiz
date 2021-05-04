import { TestBed } from '@angular/core/testing';

import { Experimental2273Service } from './experimental2273.service';

describe('Experimental2273Service', () => {
  let service: Experimental2273Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2273Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
