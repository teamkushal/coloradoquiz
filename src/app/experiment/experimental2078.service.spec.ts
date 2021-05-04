import { TestBed } from '@angular/core/testing';

import { Experimental2078Service } from './experimental2078.service';

describe('Experimental2078Service', () => {
  let service: Experimental2078Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2078Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
