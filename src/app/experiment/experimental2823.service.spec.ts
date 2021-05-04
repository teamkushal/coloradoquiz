import { TestBed } from '@angular/core/testing';

import { Experimental2823Service } from './experimental2823.service';

describe('Experimental2823Service', () => {
  let service: Experimental2823Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2823Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
