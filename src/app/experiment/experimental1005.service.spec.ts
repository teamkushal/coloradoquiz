import { TestBed } from '@angular/core/testing';

import { Experimental1005Service } from './experimental1005.service';

describe('Experimental1005Service', () => {
  let service: Experimental1005Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1005Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
