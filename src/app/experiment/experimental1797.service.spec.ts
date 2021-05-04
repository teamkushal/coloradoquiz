import { TestBed } from '@angular/core/testing';

import { Experimental1797Service } from './experimental1797.service';

describe('Experimental1797Service', () => {
  let service: Experimental1797Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1797Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
