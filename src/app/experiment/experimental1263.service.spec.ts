import { TestBed } from '@angular/core/testing';

import { Experimental1263Service } from './experimental1263.service';

describe('Experimental1263Service', () => {
  let service: Experimental1263Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1263Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
