import { TestBed } from '@angular/core/testing';

import { Experimental2783Service } from './experimental2783.service';

describe('Experimental2783Service', () => {
  let service: Experimental2783Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2783Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
