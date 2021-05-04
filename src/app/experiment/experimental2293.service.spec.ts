import { TestBed } from '@angular/core/testing';

import { Experimental2293Service } from './experimental2293.service';

describe('Experimental2293Service', () => {
  let service: Experimental2293Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2293Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
