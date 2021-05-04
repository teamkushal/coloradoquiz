import { TestBed } from '@angular/core/testing';

import { Experimental1485Service } from './experimental1485.service';

describe('Experimental1485Service', () => {
  let service: Experimental1485Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1485Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
