import { TestBed } from '@angular/core/testing';

import { Experimental1188Service } from './experimental1188.service';

describe('Experimental1188Service', () => {
  let service: Experimental1188Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1188Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
