import { TestBed } from '@angular/core/testing';

import { Experimental1607Service } from './experimental1607.service';

describe('Experimental1607Service', () => {
  let service: Experimental1607Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1607Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
