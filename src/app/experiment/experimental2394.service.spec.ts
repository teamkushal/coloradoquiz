import { TestBed } from '@angular/core/testing';

import { Experimental2394Service } from './experimental2394.service';

describe('Experimental2394Service', () => {
  let service: Experimental2394Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2394Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
