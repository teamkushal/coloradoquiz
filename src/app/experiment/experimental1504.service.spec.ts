import { TestBed } from '@angular/core/testing';

import { Experimental1504Service } from './experimental1504.service';

describe('Experimental1504Service', () => {
  let service: Experimental1504Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1504Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
