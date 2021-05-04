import { TestBed } from '@angular/core/testing';

import { Experimental1487Service } from './experimental1487.service';

describe('Experimental1487Service', () => {
  let service: Experimental1487Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1487Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
