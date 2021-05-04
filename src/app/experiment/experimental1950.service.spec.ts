import { TestBed } from '@angular/core/testing';

import { Experimental1950Service } from './experimental1950.service';

describe('Experimental1950Service', () => {
  let service: Experimental1950Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1950Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
