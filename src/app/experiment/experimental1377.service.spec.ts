import { TestBed } from '@angular/core/testing';

import { Experimental1377Service } from './experimental1377.service';

describe('Experimental1377Service', () => {
  let service: Experimental1377Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1377Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
