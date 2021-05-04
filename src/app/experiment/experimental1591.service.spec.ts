import { TestBed } from '@angular/core/testing';

import { Experimental1591Service } from './experimental1591.service';

describe('Experimental1591Service', () => {
  let service: Experimental1591Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1591Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
