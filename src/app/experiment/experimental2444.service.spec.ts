import { TestBed } from '@angular/core/testing';

import { Experimental2444Service } from './experimental2444.service';

describe('Experimental2444Service', () => {
  let service: Experimental2444Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2444Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
