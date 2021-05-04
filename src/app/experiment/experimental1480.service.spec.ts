import { TestBed } from '@angular/core/testing';

import { Experimental1480Service } from './experimental1480.service';

describe('Experimental1480Service', () => {
  let service: Experimental1480Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1480Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
