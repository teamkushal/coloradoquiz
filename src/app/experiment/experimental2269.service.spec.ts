import { TestBed } from '@angular/core/testing';

import { Experimental2269Service } from './experimental2269.service';

describe('Experimental2269Service', () => {
  let service: Experimental2269Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2269Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
