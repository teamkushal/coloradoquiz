import { TestBed } from '@angular/core/testing';

import { Experimental1802Service } from './experimental1802.service';

describe('Experimental1802Service', () => {
  let service: Experimental1802Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1802Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
