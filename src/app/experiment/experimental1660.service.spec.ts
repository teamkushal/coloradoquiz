import { TestBed } from '@angular/core/testing';

import { Experimental1660Service } from './experimental1660.service';

describe('Experimental1660Service', () => {
  let service: Experimental1660Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1660Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
