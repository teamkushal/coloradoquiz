import { TestBed } from '@angular/core/testing';

import { Experimental2044Service } from './experimental2044.service';

describe('Experimental2044Service', () => {
  let service: Experimental2044Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2044Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
