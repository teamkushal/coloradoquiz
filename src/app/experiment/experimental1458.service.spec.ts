import { TestBed } from '@angular/core/testing';

import { Experimental1458Service } from './experimental1458.service';

describe('Experimental1458Service', () => {
  let service: Experimental1458Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1458Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
