import { TestBed } from '@angular/core/testing';

import { Experimental1052Service } from './experimental1052.service';

describe('Experimental1052Service', () => {
  let service: Experimental1052Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1052Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
