import { TestBed } from '@angular/core/testing';

import { Experimental1261Service } from './experimental1261.service';

describe('Experimental1261Service', () => {
  let service: Experimental1261Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1261Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
