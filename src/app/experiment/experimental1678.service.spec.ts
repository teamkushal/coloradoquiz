import { TestBed } from '@angular/core/testing';

import { Experimental1678Service } from './experimental1678.service';

describe('Experimental1678Service', () => {
  let service: Experimental1678Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1678Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
