import { TestBed } from '@angular/core/testing';

import { Experimental2207Service } from './experimental2207.service';

describe('Experimental2207Service', () => {
  let service: Experimental2207Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2207Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
