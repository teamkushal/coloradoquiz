import { TestBed } from '@angular/core/testing';

import { Experimental1157Service } from './experimental1157.service';

describe('Experimental1157Service', () => {
  let service: Experimental1157Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1157Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
