import { TestBed } from '@angular/core/testing';

import { Experimental1243Service } from './experimental1243.service';

describe('Experimental1243Service', () => {
  let service: Experimental1243Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1243Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
