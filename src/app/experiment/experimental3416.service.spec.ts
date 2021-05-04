import { TestBed } from '@angular/core/testing';

import { Experimental3416Service } from './experimental3416.service';

describe('Experimental3416Service', () => {
  let service: Experimental3416Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3416Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
