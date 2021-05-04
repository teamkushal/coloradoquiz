import { TestBed } from '@angular/core/testing';

import { Experimental2895Service } from './experimental2895.service';

describe('Experimental2895Service', () => {
  let service: Experimental2895Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2895Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
