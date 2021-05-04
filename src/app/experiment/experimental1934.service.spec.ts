import { TestBed } from '@angular/core/testing';

import { Experimental1934Service } from './experimental1934.service';

describe('Experimental1934Service', () => {
  let service: Experimental1934Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1934Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
