import { TestBed } from '@angular/core/testing';

import { Experimental2282Service } from './experimental2282.service';

describe('Experimental2282Service', () => {
  let service: Experimental2282Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2282Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
