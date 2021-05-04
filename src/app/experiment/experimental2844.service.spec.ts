import { TestBed } from '@angular/core/testing';

import { Experimental2844Service } from './experimental2844.service';

describe('Experimental2844Service', () => {
  let service: Experimental2844Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2844Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
