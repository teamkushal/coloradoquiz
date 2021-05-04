import { TestBed } from '@angular/core/testing';

import { Experimental1666Service } from './experimental1666.service';

describe('Experimental1666Service', () => {
  let service: Experimental1666Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1666Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
