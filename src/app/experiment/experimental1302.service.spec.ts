import { TestBed } from '@angular/core/testing';

import { Experimental1302Service } from './experimental1302.service';

describe('Experimental1302Service', () => {
  let service: Experimental1302Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1302Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
