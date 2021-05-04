import { TestBed } from '@angular/core/testing';

import { Experimental1954Service } from './experimental1954.service';

describe('Experimental1954Service', () => {
  let service: Experimental1954Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1954Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
