import { TestBed } from '@angular/core/testing';

import { Experimental1477Service } from './experimental1477.service';

describe('Experimental1477Service', () => {
  let service: Experimental1477Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1477Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
