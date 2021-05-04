import { TestBed } from '@angular/core/testing';

import { Experimental2227Service } from './experimental2227.service';

describe('Experimental2227Service', () => {
  let service: Experimental2227Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2227Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
