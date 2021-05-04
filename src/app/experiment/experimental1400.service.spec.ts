import { TestBed } from '@angular/core/testing';

import { Experimental1400Service } from './experimental1400.service';

describe('Experimental1400Service', () => {
  let service: Experimental1400Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1400Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
