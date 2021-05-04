import { TestBed } from '@angular/core/testing';

import { Experimental1664Service } from './experimental1664.service';

describe('Experimental1664Service', () => {
  let service: Experimental1664Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1664Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
