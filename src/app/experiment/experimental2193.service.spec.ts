import { TestBed } from '@angular/core/testing';

import { Experimental2193Service } from './experimental2193.service';

describe('Experimental2193Service', () => {
  let service: Experimental2193Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2193Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
