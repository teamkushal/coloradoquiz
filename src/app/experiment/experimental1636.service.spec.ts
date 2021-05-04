import { TestBed } from '@angular/core/testing';

import { Experimental1636Service } from './experimental1636.service';

describe('Experimental1636Service', () => {
  let service: Experimental1636Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1636Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
