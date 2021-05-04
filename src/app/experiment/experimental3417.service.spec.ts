import { TestBed } from '@angular/core/testing';

import { Experimental3417Service } from './experimental3417.service';

describe('Experimental3417Service', () => {
  let service: Experimental3417Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3417Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
