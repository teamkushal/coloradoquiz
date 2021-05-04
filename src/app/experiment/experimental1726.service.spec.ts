import { TestBed } from '@angular/core/testing';

import { Experimental1726Service } from './experimental1726.service';

describe('Experimental1726Service', () => {
  let service: Experimental1726Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1726Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
