import { TestBed } from '@angular/core/testing';

import { Experimental2710Service } from './experimental2710.service';

describe('Experimental2710Service', () => {
  let service: Experimental2710Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2710Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
