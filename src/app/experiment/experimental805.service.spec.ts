import { TestBed } from '@angular/core/testing';

import { Experimental805Service } from './experimental805.service';

describe('Experimental805Service', () => {
  let service: Experimental805Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental805Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
