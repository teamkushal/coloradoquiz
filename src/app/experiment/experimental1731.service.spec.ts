import { TestBed } from '@angular/core/testing';

import { Experimental1731Service } from './experimental1731.service';

describe('Experimental1731Service', () => {
  let service: Experimental1731Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1731Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
