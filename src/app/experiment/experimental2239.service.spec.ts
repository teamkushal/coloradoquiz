import { TestBed } from '@angular/core/testing';

import { Experimental2239Service } from './experimental2239.service';

describe('Experimental2239Service', () => {
  let service: Experimental2239Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2239Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
