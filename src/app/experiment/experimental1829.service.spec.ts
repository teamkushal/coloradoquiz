import { TestBed } from '@angular/core/testing';

import { Experimental1829Service } from './experimental1829.service';

describe('Experimental1829Service', () => {
  let service: Experimental1829Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1829Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
