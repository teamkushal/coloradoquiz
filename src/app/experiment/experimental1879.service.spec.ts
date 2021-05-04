import { TestBed } from '@angular/core/testing';

import { Experimental1879Service } from './experimental1879.service';

describe('Experimental1879Service', () => {
  let service: Experimental1879Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1879Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
