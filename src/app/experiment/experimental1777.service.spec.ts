import { TestBed } from '@angular/core/testing';

import { Experimental1777Service } from './experimental1777.service';

describe('Experimental1777Service', () => {
  let service: Experimental1777Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1777Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
