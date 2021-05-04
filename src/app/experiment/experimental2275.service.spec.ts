import { TestBed } from '@angular/core/testing';

import { Experimental2275Service } from './experimental2275.service';

describe('Experimental2275Service', () => {
  let service: Experimental2275Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2275Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
