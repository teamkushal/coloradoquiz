import { TestBed } from '@angular/core/testing';

import { Experimental2164Service } from './experimental2164.service';

describe('Experimental2164Service', () => {
  let service: Experimental2164Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2164Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
