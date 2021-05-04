import { TestBed } from '@angular/core/testing';

import { Experimental2237Service } from './experimental2237.service';

describe('Experimental2237Service', () => {
  let service: Experimental2237Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2237Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
