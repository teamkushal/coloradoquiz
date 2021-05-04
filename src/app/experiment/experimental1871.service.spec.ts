import { TestBed } from '@angular/core/testing';

import { Experimental1871Service } from './experimental1871.service';

describe('Experimental1871Service', () => {
  let service: Experimental1871Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1871Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
