import { TestBed } from '@angular/core/testing';

import { Experimental2274Service } from './experimental2274.service';

describe('Experimental2274Service', () => {
  let service: Experimental2274Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2274Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
