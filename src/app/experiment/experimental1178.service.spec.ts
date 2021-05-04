import { TestBed } from '@angular/core/testing';

import { Experimental1178Service } from './experimental1178.service';

describe('Experimental1178Service', () => {
  let service: Experimental1178Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1178Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
