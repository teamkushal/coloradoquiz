import { TestBed } from '@angular/core/testing';

import { Experimental2370Service } from './experimental2370.service';

describe('Experimental2370Service', () => {
  let service: Experimental2370Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2370Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
