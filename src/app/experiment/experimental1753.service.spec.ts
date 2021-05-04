import { TestBed } from '@angular/core/testing';

import { Experimental1753Service } from './experimental1753.service';

describe('Experimental1753Service', () => {
  let service: Experimental1753Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1753Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
