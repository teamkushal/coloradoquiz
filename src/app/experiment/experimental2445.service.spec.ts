import { TestBed } from '@angular/core/testing';

import { Experimental2445Service } from './experimental2445.service';

describe('Experimental2445Service', () => {
  let service: Experimental2445Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2445Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
