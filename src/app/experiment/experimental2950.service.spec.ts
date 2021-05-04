import { TestBed } from '@angular/core/testing';

import { Experimental2950Service } from './experimental2950.service';

describe('Experimental2950Service', () => {
  let service: Experimental2950Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2950Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
