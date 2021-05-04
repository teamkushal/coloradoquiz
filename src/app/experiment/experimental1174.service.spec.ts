import { TestBed } from '@angular/core/testing';

import { Experimental1174Service } from './experimental1174.service';

describe('Experimental1174Service', () => {
  let service: Experimental1174Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1174Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
