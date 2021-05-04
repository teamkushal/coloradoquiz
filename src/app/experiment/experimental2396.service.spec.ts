import { TestBed } from '@angular/core/testing';

import { Experimental2396Service } from './experimental2396.service';

describe('Experimental2396Service', () => {
  let service: Experimental2396Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2396Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
