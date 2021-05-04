import { TestBed } from '@angular/core/testing';

import { Experimental1841Service } from './experimental1841.service';

describe('Experimental1841Service', () => {
  let service: Experimental1841Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1841Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
