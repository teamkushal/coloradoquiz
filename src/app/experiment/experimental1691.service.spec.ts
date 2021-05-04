import { TestBed } from '@angular/core/testing';

import { Experimental1691Service } from './experimental1691.service';

describe('Experimental1691Service', () => {
  let service: Experimental1691Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1691Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
