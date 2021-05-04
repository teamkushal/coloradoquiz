import { TestBed } from '@angular/core/testing';

import { Experimental1873Service } from './experimental1873.service';

describe('Experimental1873Service', () => {
  let service: Experimental1873Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1873Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
