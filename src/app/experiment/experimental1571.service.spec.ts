import { TestBed } from '@angular/core/testing';

import { Experimental1571Service } from './experimental1571.service';

describe('Experimental1571Service', () => {
  let service: Experimental1571Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1571Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
