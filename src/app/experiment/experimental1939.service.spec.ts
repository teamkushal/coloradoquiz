import { TestBed } from '@angular/core/testing';

import { Experimental1939Service } from './experimental1939.service';

describe('Experimental1939Service', () => {
  let service: Experimental1939Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1939Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
