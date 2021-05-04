import { TestBed } from '@angular/core/testing';

import { Experimental1736Service } from './experimental1736.service';

describe('Experimental1736Service', () => {
  let service: Experimental1736Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1736Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
