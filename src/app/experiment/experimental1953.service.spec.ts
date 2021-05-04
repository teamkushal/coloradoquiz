import { TestBed } from '@angular/core/testing';

import { Experimental1953Service } from './experimental1953.service';

describe('Experimental1953Service', () => {
  let service: Experimental1953Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1953Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
