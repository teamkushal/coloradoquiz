import { TestBed } from '@angular/core/testing';

import { Experimental2510Service } from './experimental2510.service';

describe('Experimental2510Service', () => {
  let service: Experimental2510Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2510Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
