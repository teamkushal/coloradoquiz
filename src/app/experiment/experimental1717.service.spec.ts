import { TestBed } from '@angular/core/testing';

import { Experimental1717Service } from './experimental1717.service';

describe('Experimental1717Service', () => {
  let service: Experimental1717Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1717Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
