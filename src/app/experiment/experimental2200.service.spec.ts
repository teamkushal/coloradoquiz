import { TestBed } from '@angular/core/testing';

import { Experimental2200Service } from './experimental2200.service';

describe('Experimental2200Service', () => {
  let service: Experimental2200Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2200Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
