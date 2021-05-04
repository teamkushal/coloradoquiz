import { TestBed } from '@angular/core/testing';

import { Experimental3797Service } from './experimental3797.service';

describe('Experimental3797Service', () => {
  let service: Experimental3797Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3797Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
