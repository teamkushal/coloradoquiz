import { TestBed } from '@angular/core/testing';

import { Experimental2952Service } from './experimental2952.service';

describe('Experimental2952Service', () => {
  let service: Experimental2952Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2952Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
