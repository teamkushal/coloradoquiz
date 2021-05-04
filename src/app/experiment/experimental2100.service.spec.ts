import { TestBed } from '@angular/core/testing';

import { Experimental2100Service } from './experimental2100.service';

describe('Experimental2100Service', () => {
  let service: Experimental2100Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2100Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
