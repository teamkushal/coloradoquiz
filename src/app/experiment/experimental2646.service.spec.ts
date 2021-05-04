import { TestBed } from '@angular/core/testing';

import { Experimental2646Service } from './experimental2646.service';

describe('Experimental2646Service', () => {
  let service: Experimental2646Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2646Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
