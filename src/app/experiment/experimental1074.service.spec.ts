import { TestBed } from '@angular/core/testing';

import { Experimental1074Service } from './experimental1074.service';

describe('Experimental1074Service', () => {
  let service: Experimental1074Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1074Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
