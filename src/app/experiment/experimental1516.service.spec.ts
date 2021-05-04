import { TestBed } from '@angular/core/testing';

import { Experimental1516Service } from './experimental1516.service';

describe('Experimental1516Service', () => {
  let service: Experimental1516Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1516Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
