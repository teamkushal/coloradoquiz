import { TestBed } from '@angular/core/testing';

import { Experimental2136Service } from './experimental2136.service';

describe('Experimental2136Service', () => {
  let service: Experimental2136Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2136Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
