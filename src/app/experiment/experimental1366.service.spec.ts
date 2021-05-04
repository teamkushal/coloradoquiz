import { TestBed } from '@angular/core/testing';

import { Experimental1366Service } from './experimental1366.service';

describe('Experimental1366Service', () => {
  let service: Experimental1366Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1366Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
