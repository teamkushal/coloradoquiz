import { TestBed } from '@angular/core/testing';

import { Experimental1429Service } from './experimental1429.service';

describe('Experimental1429Service', () => {
  let service: Experimental1429Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1429Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
