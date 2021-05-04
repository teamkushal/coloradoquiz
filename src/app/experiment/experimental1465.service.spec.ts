import { TestBed } from '@angular/core/testing';

import { Experimental1465Service } from './experimental1465.service';

describe('Experimental1465Service', () => {
  let service: Experimental1465Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1465Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
