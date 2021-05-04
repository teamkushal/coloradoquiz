import { TestBed } from '@angular/core/testing';

import { Experimental2343Service } from './experimental2343.service';

describe('Experimental2343Service', () => {
  let service: Experimental2343Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2343Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
