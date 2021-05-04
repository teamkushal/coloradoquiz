import { TestBed } from '@angular/core/testing';

import { Experimental1799Service } from './experimental1799.service';

describe('Experimental1799Service', () => {
  let service: Experimental1799Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1799Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
