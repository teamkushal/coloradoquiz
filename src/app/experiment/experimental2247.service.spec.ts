import { TestBed } from '@angular/core/testing';

import { Experimental2247Service } from './experimental2247.service';

describe('Experimental2247Service', () => {
  let service: Experimental2247Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2247Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
