import { TestBed } from '@angular/core/testing';

import { Experimental1199Service } from './experimental1199.service';

describe('Experimental1199Service', () => {
  let service: Experimental1199Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1199Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
