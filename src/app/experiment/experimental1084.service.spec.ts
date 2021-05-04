import { TestBed } from '@angular/core/testing';

import { Experimental1084Service } from './experimental1084.service';

describe('Experimental1084Service', () => {
  let service: Experimental1084Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1084Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
