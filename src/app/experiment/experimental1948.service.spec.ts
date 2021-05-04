import { TestBed } from '@angular/core/testing';

import { Experimental1948Service } from './experimental1948.service';

describe('Experimental1948Service', () => {
  let service: Experimental1948Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1948Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
