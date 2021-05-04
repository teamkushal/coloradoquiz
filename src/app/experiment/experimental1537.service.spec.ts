import { TestBed } from '@angular/core/testing';

import { Experimental1537Service } from './experimental1537.service';

describe('Experimental1537Service', () => {
  let service: Experimental1537Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1537Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
