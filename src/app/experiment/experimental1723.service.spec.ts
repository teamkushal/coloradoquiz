import { TestBed } from '@angular/core/testing';

import { Experimental1723Service } from './experimental1723.service';

describe('Experimental1723Service', () => {
  let service: Experimental1723Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1723Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
