import { TestBed } from '@angular/core/testing';

import { Experimental1416Service } from './experimental1416.service';

describe('Experimental1416Service', () => {
  let service: Experimental1416Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1416Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
