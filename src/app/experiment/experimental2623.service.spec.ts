import { TestBed } from '@angular/core/testing';

import { Experimental2623Service } from './experimental2623.service';

describe('Experimental2623Service', () => {
  let service: Experimental2623Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2623Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
