import { TestBed } from '@angular/core/testing';

import { Experimental2503Service } from './experimental2503.service';

describe('Experimental2503Service', () => {
  let service: Experimental2503Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2503Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
