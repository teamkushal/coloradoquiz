import { TestBed } from '@angular/core/testing';

import { Experimental1387Service } from './experimental1387.service';

describe('Experimental1387Service', () => {
  let service: Experimental1387Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1387Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
