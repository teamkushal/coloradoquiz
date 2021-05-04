import { TestBed } from '@angular/core/testing';

import { Experimental2762Service } from './experimental2762.service';

describe('Experimental2762Service', () => {
  let service: Experimental2762Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2762Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
