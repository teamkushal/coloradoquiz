import { TestBed } from '@angular/core/testing';

import { Experimental1035Service } from './experimental1035.service';

describe('Experimental1035Service', () => {
  let service: Experimental1035Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1035Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
