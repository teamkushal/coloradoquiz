import { TestBed } from '@angular/core/testing';

import { Experimental1822Service } from './experimental1822.service';

describe('Experimental1822Service', () => {
  let service: Experimental1822Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1822Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
