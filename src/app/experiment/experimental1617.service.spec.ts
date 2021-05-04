import { TestBed } from '@angular/core/testing';

import { Experimental1617Service } from './experimental1617.service';

describe('Experimental1617Service', () => {
  let service: Experimental1617Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1617Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
