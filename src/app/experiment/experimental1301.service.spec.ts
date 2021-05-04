import { TestBed } from '@angular/core/testing';

import { Experimental1301Service } from './experimental1301.service';

describe('Experimental1301Service', () => {
  let service: Experimental1301Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1301Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
