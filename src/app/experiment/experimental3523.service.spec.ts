import { TestBed } from '@angular/core/testing';

import { Experimental3523Service } from './experimental3523.service';

describe('Experimental3523Service', () => {
  let service: Experimental3523Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3523Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
