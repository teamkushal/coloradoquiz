import { TestBed } from '@angular/core/testing';

import { Experimental2276Service } from './experimental2276.service';

describe('Experimental2276Service', () => {
  let service: Experimental2276Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2276Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
