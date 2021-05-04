import { TestBed } from '@angular/core/testing';

import { Experimental2285Service } from './experimental2285.service';

describe('Experimental2285Service', () => {
  let service: Experimental2285Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2285Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
