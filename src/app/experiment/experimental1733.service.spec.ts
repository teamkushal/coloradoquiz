import { TestBed } from '@angular/core/testing';

import { Experimental1733Service } from './experimental1733.service';

describe('Experimental1733Service', () => {
  let service: Experimental1733Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1733Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
