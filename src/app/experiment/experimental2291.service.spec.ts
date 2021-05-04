import { TestBed } from '@angular/core/testing';

import { Experimental2291Service } from './experimental2291.service';

describe('Experimental2291Service', () => {
  let service: Experimental2291Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2291Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
