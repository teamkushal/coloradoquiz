import { TestBed } from '@angular/core/testing';

import { Experimental2970Service } from './experimental2970.service';

describe('Experimental2970Service', () => {
  let service: Experimental2970Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2970Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
