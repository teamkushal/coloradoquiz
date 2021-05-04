import { TestBed } from '@angular/core/testing';

import { Experimental2840Service } from './experimental2840.service';

describe('Experimental2840Service', () => {
  let service: Experimental2840Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2840Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
