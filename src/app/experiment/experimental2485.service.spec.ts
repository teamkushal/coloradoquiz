import { TestBed } from '@angular/core/testing';

import { Experimental2485Service } from './experimental2485.service';

describe('Experimental2485Service', () => {
  let service: Experimental2485Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2485Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
