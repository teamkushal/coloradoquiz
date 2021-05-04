import { TestBed } from '@angular/core/testing';

import { Experimental1180Service } from './experimental1180.service';

describe('Experimental1180Service', () => {
  let service: Experimental1180Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1180Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
