import { TestBed } from '@angular/core/testing';

import { Experimental1852Service } from './experimental1852.service';

describe('Experimental1852Service', () => {
  let service: Experimental1852Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1852Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
