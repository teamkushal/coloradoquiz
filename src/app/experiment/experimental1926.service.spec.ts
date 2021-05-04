import { TestBed } from '@angular/core/testing';

import { Experimental1926Service } from './experimental1926.service';

describe('Experimental1926Service', () => {
  let service: Experimental1926Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1926Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
