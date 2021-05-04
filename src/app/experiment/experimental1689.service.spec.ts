import { TestBed } from '@angular/core/testing';

import { Experimental1689Service } from './experimental1689.service';

describe('Experimental1689Service', () => {
  let service: Experimental1689Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1689Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
