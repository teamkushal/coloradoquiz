import { TestBed } from '@angular/core/testing';

import { Experimental2456Service } from './experimental2456.service';

describe('Experimental2456Service', () => {
  let service: Experimental2456Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2456Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
