import { TestBed } from '@angular/core/testing';

import { Experimental1783Service } from './experimental1783.service';

describe('Experimental1783Service', () => {
  let service: Experimental1783Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1783Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
