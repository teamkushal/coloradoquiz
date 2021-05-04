import { TestBed } from '@angular/core/testing';

import { Experimental2492Service } from './experimental2492.service';

describe('Experimental2492Service', () => {
  let service: Experimental2492Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2492Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
