import { TestBed } from '@angular/core/testing';

import { Experimental1126Service } from './experimental1126.service';

describe('Experimental1126Service', () => {
  let service: Experimental1126Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1126Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
