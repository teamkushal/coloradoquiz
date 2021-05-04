import { TestBed } from '@angular/core/testing';

import { Experimental2040Service } from './experimental2040.service';

describe('Experimental2040Service', () => {
  let service: Experimental2040Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2040Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
