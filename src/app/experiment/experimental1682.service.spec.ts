import { TestBed } from '@angular/core/testing';

import { Experimental1682Service } from './experimental1682.service';

describe('Experimental1682Service', () => {
  let service: Experimental1682Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1682Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
