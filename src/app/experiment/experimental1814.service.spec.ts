import { TestBed } from '@angular/core/testing';

import { Experimental1814Service } from './experimental1814.service';

describe('Experimental1814Service', () => {
  let service: Experimental1814Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1814Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
