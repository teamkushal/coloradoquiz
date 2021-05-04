import { TestBed } from '@angular/core/testing';

import { Experimental1579Service } from './experimental1579.service';

describe('Experimental1579Service', () => {
  let service: Experimental1579Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1579Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
