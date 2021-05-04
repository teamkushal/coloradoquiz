import { TestBed } from '@angular/core/testing';

import { Experimental218Service } from './experimental218.service';

describe('Experimental218Service', () => {
  let service: Experimental218Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental218Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
