import { TestBed } from '@angular/core/testing';

import { Experimental1462Service } from './experimental1462.service';

describe('Experimental1462Service', () => {
  let service: Experimental1462Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1462Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
