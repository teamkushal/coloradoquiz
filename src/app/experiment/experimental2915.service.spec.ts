import { TestBed } from '@angular/core/testing';

import { Experimental2915Service } from './experimental2915.service';

describe('Experimental2915Service', () => {
  let service: Experimental2915Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2915Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
