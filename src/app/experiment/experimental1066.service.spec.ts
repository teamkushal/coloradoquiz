import { TestBed } from '@angular/core/testing';

import { Experimental1066Service } from './experimental1066.service';

describe('Experimental1066Service', () => {
  let service: Experimental1066Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1066Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
