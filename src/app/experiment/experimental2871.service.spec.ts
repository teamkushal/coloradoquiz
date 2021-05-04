import { TestBed } from '@angular/core/testing';

import { Experimental2871Service } from './experimental2871.service';

describe('Experimental2871Service', () => {
  let service: Experimental2871Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2871Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
