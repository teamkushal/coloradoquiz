import { TestBed } from '@angular/core/testing';

import { Experimental2572Service } from './experimental2572.service';

describe('Experimental2572Service', () => {
  let service: Experimental2572Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2572Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
