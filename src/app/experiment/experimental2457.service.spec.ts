import { TestBed } from '@angular/core/testing';

import { Experimental2457Service } from './experimental2457.service';

describe('Experimental2457Service', () => {
  let service: Experimental2457Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2457Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
