import { TestBed } from '@angular/core/testing';

import { Experimental2419Service } from './experimental2419.service';

describe('Experimental2419Service', () => {
  let service: Experimental2419Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2419Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
