import { TestBed } from '@angular/core/testing';

import { Experimental2058Service } from './experimental2058.service';

describe('Experimental2058Service', () => {
  let service: Experimental2058Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2058Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
