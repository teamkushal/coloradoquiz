import { TestBed } from '@angular/core/testing';

import { Experimental1382Service } from './experimental1382.service';

describe('Experimental1382Service', () => {
  let service: Experimental1382Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1382Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
