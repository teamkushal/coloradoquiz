import { TestBed } from '@angular/core/testing';

import { Experimental1646Service } from './experimental1646.service';

describe('Experimental1646Service', () => {
  let service: Experimental1646Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1646Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
