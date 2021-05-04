import { TestBed } from '@angular/core/testing';

import { Experimental2820Service } from './experimental2820.service';

describe('Experimental2820Service', () => {
  let service: Experimental2820Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2820Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
