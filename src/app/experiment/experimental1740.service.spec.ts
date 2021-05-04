import { TestBed } from '@angular/core/testing';

import { Experimental1740Service } from './experimental1740.service';

describe('Experimental1740Service', () => {
  let service: Experimental1740Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1740Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
