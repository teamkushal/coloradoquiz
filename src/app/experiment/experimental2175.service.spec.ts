import { TestBed } from '@angular/core/testing';

import { Experimental2175Service } from './experimental2175.service';

describe('Experimental2175Service', () => {
  let service: Experimental2175Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2175Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
