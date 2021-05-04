import { TestBed } from '@angular/core/testing';

import { Experimental1323Service } from './experimental1323.service';

describe('Experimental1323Service', () => {
  let service: Experimental1323Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1323Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
