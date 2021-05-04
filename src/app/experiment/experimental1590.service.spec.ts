import { TestBed } from '@angular/core/testing';

import { Experimental1590Service } from './experimental1590.service';

describe('Experimental1590Service', () => {
  let service: Experimental1590Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1590Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
