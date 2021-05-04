import { TestBed } from '@angular/core/testing';

import { Experimental1078Service } from './experimental1078.service';

describe('Experimental1078Service', () => {
  let service: Experimental1078Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1078Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
