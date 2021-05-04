import { TestBed } from '@angular/core/testing';

import { Experimental1818Service } from './experimental1818.service';

describe('Experimental1818Service', () => {
  let service: Experimental1818Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1818Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
