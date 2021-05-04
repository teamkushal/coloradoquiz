import { TestBed } from '@angular/core/testing';

import { Experimental1699Service } from './experimental1699.service';

describe('Experimental1699Service', () => {
  let service: Experimental1699Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1699Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
