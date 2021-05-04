import { TestBed } from '@angular/core/testing';

import { Experimental2043Service } from './experimental2043.service';

describe('Experimental2043Service', () => {
  let service: Experimental2043Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2043Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
