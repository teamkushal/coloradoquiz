import { TestBed } from '@angular/core/testing';

import { Experimental1467Service } from './experimental1467.service';

describe('Experimental1467Service', () => {
  let service: Experimental1467Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1467Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
