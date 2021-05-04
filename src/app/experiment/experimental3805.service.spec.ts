import { TestBed } from '@angular/core/testing';

import { Experimental3805Service } from './experimental3805.service';

describe('Experimental3805Service', () => {
  let service: Experimental3805Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3805Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
