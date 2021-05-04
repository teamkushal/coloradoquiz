import { TestBed } from '@angular/core/testing';

import { Experimental1508Service } from './experimental1508.service';

describe('Experimental1508Service', () => {
  let service: Experimental1508Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1508Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
