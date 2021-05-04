import { TestBed } from '@angular/core/testing';

import { Experimental1901Service } from './experimental1901.service';

describe('Experimental1901Service', () => {
  let service: Experimental1901Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1901Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
