import { TestBed } from '@angular/core/testing';

import { Experimental1842Service } from './experimental1842.service';

describe('Experimental1842Service', () => {
  let service: Experimental1842Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1842Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
