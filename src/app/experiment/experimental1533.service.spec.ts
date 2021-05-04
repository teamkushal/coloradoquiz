import { TestBed } from '@angular/core/testing';

import { Experimental1533Service } from './experimental1533.service';

describe('Experimental1533Service', () => {
  let service: Experimental1533Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1533Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
