import { TestBed } from '@angular/core/testing';

import { Experimental1658Service } from './experimental1658.service';

describe('Experimental1658Service', () => {
  let service: Experimental1658Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1658Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
