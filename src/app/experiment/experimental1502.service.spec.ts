import { TestBed } from '@angular/core/testing';

import { Experimental1502Service } from './experimental1502.service';

describe('Experimental1502Service', () => {
  let service: Experimental1502Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1502Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
