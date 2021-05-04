import { TestBed } from '@angular/core/testing';

import { Experimental1300Service } from './experimental1300.service';

describe('Experimental1300Service', () => {
  let service: Experimental1300Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1300Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
