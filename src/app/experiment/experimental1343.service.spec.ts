import { TestBed } from '@angular/core/testing';

import { Experimental1343Service } from './experimental1343.service';

describe('Experimental1343Service', () => {
  let service: Experimental1343Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1343Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
