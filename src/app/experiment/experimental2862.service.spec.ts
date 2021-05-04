import { TestBed } from '@angular/core/testing';

import { Experimental2862Service } from './experimental2862.service';

describe('Experimental2862Service', () => {
  let service: Experimental2862Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2862Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
