import { TestBed } from '@angular/core/testing';

import { Experimental2467Service } from './experimental2467.service';

describe('Experimental2467Service', () => {
  let service: Experimental2467Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2467Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
