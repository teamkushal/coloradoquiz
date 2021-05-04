import { TestBed } from '@angular/core/testing';

import { Experimental1835Service } from './experimental1835.service';

describe('Experimental1835Service', () => {
  let service: Experimental1835Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1835Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
