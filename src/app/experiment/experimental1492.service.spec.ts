import { TestBed } from '@angular/core/testing';

import { Experimental1492Service } from './experimental1492.service';

describe('Experimental1492Service', () => {
  let service: Experimental1492Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1492Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
