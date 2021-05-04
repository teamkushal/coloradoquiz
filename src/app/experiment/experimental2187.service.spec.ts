import { TestBed } from '@angular/core/testing';

import { Experimental2187Service } from './experimental2187.service';

describe('Experimental2187Service', () => {
  let service: Experimental2187Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2187Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
