import { TestBed } from '@angular/core/testing';

import { Experimental1862Service } from './experimental1862.service';

describe('Experimental1862Service', () => {
  let service: Experimental1862Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1862Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
