import { TestBed } from '@angular/core/testing';

import { Experimental2984Service } from './experimental2984.service';

describe('Experimental2984Service', () => {
  let service: Experimental2984Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2984Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
