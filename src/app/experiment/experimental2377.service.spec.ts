import { TestBed } from '@angular/core/testing';

import { Experimental2377Service } from './experimental2377.service';

describe('Experimental2377Service', () => {
  let service: Experimental2377Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2377Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
