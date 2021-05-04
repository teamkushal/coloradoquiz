import { TestBed } from '@angular/core/testing';

import { Experimental1820Service } from './experimental1820.service';

describe('Experimental1820Service', () => {
  let service: Experimental1820Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1820Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
