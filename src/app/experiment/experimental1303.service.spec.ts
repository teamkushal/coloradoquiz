import { TestBed } from '@angular/core/testing';

import { Experimental1303Service } from './experimental1303.service';

describe('Experimental1303Service', () => {
  let service: Experimental1303Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1303Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
