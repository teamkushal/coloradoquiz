import { TestBed } from '@angular/core/testing';

import { Experimental2504Service } from './experimental2504.service';

describe('Experimental2504Service', () => {
  let service: Experimental2504Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2504Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
