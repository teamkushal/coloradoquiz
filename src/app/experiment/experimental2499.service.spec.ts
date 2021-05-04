import { TestBed } from '@angular/core/testing';

import { Experimental2499Service } from './experimental2499.service';

describe('Experimental2499Service', () => {
  let service: Experimental2499Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2499Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
