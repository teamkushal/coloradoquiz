import { TestBed } from '@angular/core/testing';

import { Experimental1683Service } from './experimental1683.service';

describe('Experimental1683Service', () => {
  let service: Experimental1683Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1683Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
