import { TestBed } from '@angular/core/testing';

import { Experimental1299Service } from './experimental1299.service';

describe('Experimental1299Service', () => {
  let service: Experimental1299Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1299Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
