import { TestBed } from '@angular/core/testing';

import { Experimental2108Service } from './experimental2108.service';

describe('Experimental2108Service', () => {
  let service: Experimental2108Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2108Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
