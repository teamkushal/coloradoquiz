import { TestBed } from '@angular/core/testing';

import { Experimental1720Service } from './experimental1720.service';

describe('Experimental1720Service', () => {
  let service: Experimental1720Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1720Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
