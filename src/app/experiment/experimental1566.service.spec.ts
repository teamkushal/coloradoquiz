import { TestBed } from '@angular/core/testing';

import { Experimental1566Service } from './experimental1566.service';

describe('Experimental1566Service', () => {
  let service: Experimental1566Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1566Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
