import { TestBed } from '@angular/core/testing';

import { Experimental1791Service } from './experimental1791.service';

describe('Experimental1791Service', () => {
  let service: Experimental1791Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1791Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
