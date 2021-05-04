import { TestBed } from '@angular/core/testing';

import { Experimental1548Service } from './experimental1548.service';

describe('Experimental1548Service', () => {
  let service: Experimental1548Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1548Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
