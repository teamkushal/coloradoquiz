import { TestBed } from '@angular/core/testing';

import { Experimental382Service } from './experimental382.service';

describe('Experimental382Service', () => {
  let service: Experimental382Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental382Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
