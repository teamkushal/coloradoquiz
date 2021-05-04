import { TestBed } from '@angular/core/testing';

import { Experimental1541Service } from './experimental1541.service';

describe('Experimental1541Service', () => {
  let service: Experimental1541Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1541Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
