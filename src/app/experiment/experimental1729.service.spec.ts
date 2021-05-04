import { TestBed } from '@angular/core/testing';

import { Experimental1729Service } from './experimental1729.service';

describe('Experimental1729Service', () => {
  let service: Experimental1729Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1729Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
