import { TestBed } from '@angular/core/testing';

import { Experimental1580Service } from './experimental1580.service';

describe('Experimental1580Service', () => {
  let service: Experimental1580Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1580Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
