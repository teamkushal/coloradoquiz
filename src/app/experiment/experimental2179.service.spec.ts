import { TestBed } from '@angular/core/testing';

import { Experimental2179Service } from './experimental2179.service';

describe('Experimental2179Service', () => {
  let service: Experimental2179Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2179Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
