import { TestBed } from '@angular/core/testing';

import { Experimental2969Service } from './experimental2969.service';

describe('Experimental2969Service', () => {
  let service: Experimental2969Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2969Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
