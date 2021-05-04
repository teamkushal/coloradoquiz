import { TestBed } from '@angular/core/testing';

import { Experimental1969Service } from './experimental1969.service';

describe('Experimental1969Service', () => {
  let service: Experimental1969Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1969Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
