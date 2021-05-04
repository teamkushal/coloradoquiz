import { TestBed } from '@angular/core/testing';

import { Experimental1554Service } from './experimental1554.service';

describe('Experimental1554Service', () => {
  let service: Experimental1554Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1554Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
