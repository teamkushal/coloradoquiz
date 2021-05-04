import { TestBed } from '@angular/core/testing';

import { Experimental1229Service } from './experimental1229.service';

describe('Experimental1229Service', () => {
  let service: Experimental1229Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1229Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
