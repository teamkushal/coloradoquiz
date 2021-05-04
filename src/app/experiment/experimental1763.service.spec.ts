import { TestBed } from '@angular/core/testing';

import { Experimental1763Service } from './experimental1763.service';

describe('Experimental1763Service', () => {
  let service: Experimental1763Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1763Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
