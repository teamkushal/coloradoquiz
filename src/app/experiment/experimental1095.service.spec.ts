import { TestBed } from '@angular/core/testing';

import { Experimental1095Service } from './experimental1095.service';

describe('Experimental1095Service', () => {
  let service: Experimental1095Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1095Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
