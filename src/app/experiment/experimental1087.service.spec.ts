import { TestBed } from '@angular/core/testing';

import { Experimental1087Service } from './experimental1087.service';

describe('Experimental1087Service', () => {
  let service: Experimental1087Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1087Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
