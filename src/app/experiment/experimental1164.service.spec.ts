import { TestBed } from '@angular/core/testing';

import { Experimental1164Service } from './experimental1164.service';

describe('Experimental1164Service', () => {
  let service: Experimental1164Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1164Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
