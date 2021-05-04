import { TestBed } from '@angular/core/testing';

import { Experimental1360Service } from './experimental1360.service';

describe('Experimental1360Service', () => {
  let service: Experimental1360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
