import { TestBed } from '@angular/core/testing';

import { Experimental1089Service } from './experimental1089.service';

describe('Experimental1089Service', () => {
  let service: Experimental1089Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1089Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
