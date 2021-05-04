import { TestBed } from '@angular/core/testing';

import { Experimental1609Service } from './experimental1609.service';

describe('Experimental1609Service', () => {
  let service: Experimental1609Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1609Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
