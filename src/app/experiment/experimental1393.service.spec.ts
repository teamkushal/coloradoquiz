import { TestBed } from '@angular/core/testing';

import { Experimental1393Service } from './experimental1393.service';

describe('Experimental1393Service', () => {
  let service: Experimental1393Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1393Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
