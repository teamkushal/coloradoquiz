import { TestBed } from '@angular/core/testing';

import { Experimental2508Service } from './experimental2508.service';

describe('Experimental2508Service', () => {
  let service: Experimental2508Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2508Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
