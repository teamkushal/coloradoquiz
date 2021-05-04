import { TestBed } from '@angular/core/testing';

import { Experimental1298Service } from './experimental1298.service';

describe('Experimental1298Service', () => {
  let service: Experimental1298Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1298Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
