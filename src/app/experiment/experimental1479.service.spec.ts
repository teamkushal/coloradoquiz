import { TestBed } from '@angular/core/testing';

import { Experimental1479Service } from './experimental1479.service';

describe('Experimental1479Service', () => {
  let service: Experimental1479Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1479Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
