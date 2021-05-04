import { TestBed } from '@angular/core/testing';

import { Experimental2353Service } from './experimental2353.service';

describe('Experimental2353Service', () => {
  let service: Experimental2353Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2353Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
