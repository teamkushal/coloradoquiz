import { TestBed } from '@angular/core/testing';

import { Experimental1805Service } from './experimental1805.service';

describe('Experimental1805Service', () => {
  let service: Experimental1805Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1805Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
