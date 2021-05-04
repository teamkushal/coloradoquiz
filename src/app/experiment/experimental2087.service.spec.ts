import { TestBed } from '@angular/core/testing';

import { Experimental2087Service } from './experimental2087.service';

describe('Experimental2087Service', () => {
  let service: Experimental2087Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2087Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
