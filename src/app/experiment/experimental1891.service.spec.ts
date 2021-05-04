import { TestBed } from '@angular/core/testing';

import { Experimental1891Service } from './experimental1891.service';

describe('Experimental1891Service', () => {
  let service: Experimental1891Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1891Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
