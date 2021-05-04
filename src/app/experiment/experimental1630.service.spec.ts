import { TestBed } from '@angular/core/testing';

import { Experimental1630Service } from './experimental1630.service';

describe('Experimental1630Service', () => {
  let service: Experimental1630Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1630Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
