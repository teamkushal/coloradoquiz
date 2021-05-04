import { TestBed } from '@angular/core/testing';

import { Experimental1876Service } from './experimental1876.service';

describe('Experimental1876Service', () => {
  let service: Experimental1876Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1876Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
