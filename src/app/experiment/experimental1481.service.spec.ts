import { TestBed } from '@angular/core/testing';

import { Experimental1481Service } from './experimental1481.service';

describe('Experimental1481Service', () => {
  let service: Experimental1481Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1481Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
