import { TestBed } from '@angular/core/testing';

import { Experimental275Service } from './experimental275.service';

describe('Experimental275Service', () => {
  let service: Experimental275Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental275Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
