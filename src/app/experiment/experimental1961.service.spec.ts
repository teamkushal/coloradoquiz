import { TestBed } from '@angular/core/testing';

import { Experimental1961Service } from './experimental1961.service';

describe('Experimental1961Service', () => {
  let service: Experimental1961Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1961Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
