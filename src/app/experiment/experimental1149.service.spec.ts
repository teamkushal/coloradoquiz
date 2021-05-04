import { TestBed } from '@angular/core/testing';

import { Experimental1149Service } from './experimental1149.service';

describe('Experimental1149Service', () => {
  let service: Experimental1149Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1149Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
