import { TestBed } from '@angular/core/testing';

import { Experimental1866Service } from './experimental1866.service';

describe('Experimental1866Service', () => {
  let service: Experimental1866Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1866Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
