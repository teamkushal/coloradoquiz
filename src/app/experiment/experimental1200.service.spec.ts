import { TestBed } from '@angular/core/testing';

import { Experimental1200Service } from './experimental1200.service';

describe('Experimental1200Service', () => {
  let service: Experimental1200Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1200Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
