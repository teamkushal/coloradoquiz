import { TestBed } from '@angular/core/testing';

import { Experimental2593Service } from './experimental2593.service';

describe('Experimental2593Service', () => {
  let service: Experimental2593Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2593Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
