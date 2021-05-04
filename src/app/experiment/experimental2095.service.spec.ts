import { TestBed } from '@angular/core/testing';

import { Experimental2095Service } from './experimental2095.service';

describe('Experimental2095Service', () => {
  let service: Experimental2095Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2095Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
