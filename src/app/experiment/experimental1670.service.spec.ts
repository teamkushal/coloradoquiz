import { TestBed } from '@angular/core/testing';

import { Experimental1670Service } from './experimental1670.service';

describe('Experimental1670Service', () => {
  let service: Experimental1670Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1670Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
