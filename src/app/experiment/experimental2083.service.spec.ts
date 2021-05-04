import { TestBed } from '@angular/core/testing';

import { Experimental2083Service } from './experimental2083.service';

describe('Experimental2083Service', () => {
  let service: Experimental2083Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2083Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
