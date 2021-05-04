import { TestBed } from '@angular/core/testing';

import { Experimental1774Service } from './experimental1774.service';

describe('Experimental1774Service', () => {
  let service: Experimental1774Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1774Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
