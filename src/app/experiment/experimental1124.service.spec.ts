import { TestBed } from '@angular/core/testing';

import { Experimental1124Service } from './experimental1124.service';

describe('Experimental1124Service', () => {
  let service: Experimental1124Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1124Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
