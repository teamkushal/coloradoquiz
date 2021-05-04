import { TestBed } from '@angular/core/testing';

import { Experimental2785Service } from './experimental2785.service';

describe('Experimental2785Service', () => {
  let service: Experimental2785Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2785Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
