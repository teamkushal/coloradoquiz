import { TestBed } from '@angular/core/testing';

import { Experimental2469Service } from './experimental2469.service';

describe('Experimental2469Service', () => {
  let service: Experimental2469Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2469Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
