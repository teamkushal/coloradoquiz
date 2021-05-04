import { TestBed } from '@angular/core/testing';

import { Experimental1671Service } from './experimental1671.service';

describe('Experimental1671Service', () => {
  let service: Experimental1671Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1671Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
