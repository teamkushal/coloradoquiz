import { TestBed } from '@angular/core/testing';

import { Experimental1562Service } from './experimental1562.service';

describe('Experimental1562Service', () => {
  let service: Experimental1562Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1562Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
