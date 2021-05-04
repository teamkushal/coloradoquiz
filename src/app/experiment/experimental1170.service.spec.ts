import { TestBed } from '@angular/core/testing';

import { Experimental1170Service } from './experimental1170.service';

describe('Experimental1170Service', () => {
  let service: Experimental1170Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1170Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
