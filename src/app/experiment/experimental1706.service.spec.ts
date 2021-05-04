import { TestBed } from '@angular/core/testing';

import { Experimental1706Service } from './experimental1706.service';

describe('Experimental1706Service', () => {
  let service: Experimental1706Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1706Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
