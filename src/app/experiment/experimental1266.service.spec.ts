import { TestBed } from '@angular/core/testing';

import { Experimental1266Service } from './experimental1266.service';

describe('Experimental1266Service', () => {
  let service: Experimental1266Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1266Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
