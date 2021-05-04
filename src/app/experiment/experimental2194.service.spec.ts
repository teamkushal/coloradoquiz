import { TestBed } from '@angular/core/testing';

import { Experimental2194Service } from './experimental2194.service';

describe('Experimental2194Service', () => {
  let service: Experimental2194Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2194Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
