import { TestBed } from '@angular/core/testing';

import { Experimental1595Service } from './experimental1595.service';

describe('Experimental1595Service', () => {
  let service: Experimental1595Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1595Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
