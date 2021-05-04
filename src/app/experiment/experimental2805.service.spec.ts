import { TestBed } from '@angular/core/testing';

import { Experimental2805Service } from './experimental2805.service';

describe('Experimental2805Service', () => {
  let service: Experimental2805Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2805Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
