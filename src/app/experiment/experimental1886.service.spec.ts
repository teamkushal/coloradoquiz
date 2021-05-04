import { TestBed } from '@angular/core/testing';

import { Experimental1886Service } from './experimental1886.service';

describe('Experimental1886Service', () => {
  let service: Experimental1886Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1886Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
