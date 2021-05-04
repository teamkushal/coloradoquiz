import { TestBed } from '@angular/core/testing';

import { Experimental1844Service } from './experimental1844.service';

describe('Experimental1844Service', () => {
  let service: Experimental1844Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1844Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
