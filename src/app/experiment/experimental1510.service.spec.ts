import { TestBed } from '@angular/core/testing';

import { Experimental1510Service } from './experimental1510.service';

describe('Experimental1510Service', () => {
  let service: Experimental1510Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1510Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
