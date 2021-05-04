import { TestBed } from '@angular/core/testing';

import { Experimental1996Service } from './experimental1996.service';

describe('Experimental1996Service', () => {
  let service: Experimental1996Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1996Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
