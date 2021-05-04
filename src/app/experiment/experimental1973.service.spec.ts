import { TestBed } from '@angular/core/testing';

import { Experimental1973Service } from './experimental1973.service';

describe('Experimental1973Service', () => {
  let service: Experimental1973Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1973Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
