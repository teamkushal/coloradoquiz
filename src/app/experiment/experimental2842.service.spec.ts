import { TestBed } from '@angular/core/testing';

import { Experimental2842Service } from './experimental2842.service';

describe('Experimental2842Service', () => {
  let service: Experimental2842Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2842Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
