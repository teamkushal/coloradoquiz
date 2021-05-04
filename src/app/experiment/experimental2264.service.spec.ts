import { TestBed } from '@angular/core/testing';

import { Experimental2264Service } from './experimental2264.service';

describe('Experimental2264Service', () => {
  let service: Experimental2264Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2264Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
