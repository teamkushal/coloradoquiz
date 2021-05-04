import { TestBed } from '@angular/core/testing';

import { Experimental2548Service } from './experimental2548.service';

describe('Experimental2548Service', () => {
  let service: Experimental2548Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2548Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
