import { TestBed } from '@angular/core/testing';

import { Experimental2298Service } from './experimental2298.service';

describe('Experimental2298Service', () => {
  let service: Experimental2298Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2298Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
