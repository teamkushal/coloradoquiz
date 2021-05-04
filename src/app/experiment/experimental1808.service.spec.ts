import { TestBed } from '@angular/core/testing';

import { Experimental1808Service } from './experimental1808.service';

describe('Experimental1808Service', () => {
  let service: Experimental1808Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1808Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
