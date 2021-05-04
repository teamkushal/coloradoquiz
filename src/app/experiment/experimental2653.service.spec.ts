import { TestBed } from '@angular/core/testing';

import { Experimental2653Service } from './experimental2653.service';

describe('Experimental2653Service', () => {
  let service: Experimental2653Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2653Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
