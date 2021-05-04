import { TestBed } from '@angular/core/testing';

import { Experimental2289Service } from './experimental2289.service';

describe('Experimental2289Service', () => {
  let service: Experimental2289Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2289Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
