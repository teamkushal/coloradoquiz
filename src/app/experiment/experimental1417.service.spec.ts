import { TestBed } from '@angular/core/testing';

import { Experimental1417Service } from './experimental1417.service';

describe('Experimental1417Service', () => {
  let service: Experimental1417Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1417Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
