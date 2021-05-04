import { TestBed } from '@angular/core/testing';

import { Experimental1041Service } from './experimental1041.service';

describe('Experimental1041Service', () => {
  let service: Experimental1041Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1041Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
