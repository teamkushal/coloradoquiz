import { TestBed } from '@angular/core/testing';

import { Experimental2909Service } from './experimental2909.service';

describe('Experimental2909Service', () => {
  let service: Experimental2909Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2909Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
