import { TestBed } from '@angular/core/testing';

import { Experimental1316Service } from './experimental1316.service';

describe('Experimental1316Service', () => {
  let service: Experimental1316Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1316Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
