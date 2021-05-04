import { TestBed } from '@angular/core/testing';

import { Experimental1970Service } from './experimental1970.service';

describe('Experimental1970Service', () => {
  let service: Experimental1970Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1970Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
