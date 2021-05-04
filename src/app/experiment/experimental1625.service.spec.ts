import { TestBed } from '@angular/core/testing';

import { Experimental1625Service } from './experimental1625.service';

describe('Experimental1625Service', () => {
  let service: Experimental1625Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1625Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
