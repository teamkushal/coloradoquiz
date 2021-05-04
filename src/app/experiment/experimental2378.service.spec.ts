import { TestBed } from '@angular/core/testing';

import { Experimental2378Service } from './experimental2378.service';

describe('Experimental2378Service', () => {
  let service: Experimental2378Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2378Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
