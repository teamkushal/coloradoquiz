import { TestBed } from '@angular/core/testing';

import { Experimental1928Service } from './experimental1928.service';

describe('Experimental1928Service', () => {
  let service: Experimental1928Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1928Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
