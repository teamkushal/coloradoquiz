import { TestBed } from '@angular/core/testing';

import { Experimental2104Service } from './experimental2104.service';

describe('Experimental2104Service', () => {
  let service: Experimental2104Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2104Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
