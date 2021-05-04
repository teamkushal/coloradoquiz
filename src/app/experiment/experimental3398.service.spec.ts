import { TestBed } from '@angular/core/testing';

import { Experimental3398Service } from './experimental3398.service';

describe('Experimental3398Service', () => {
  let service: Experimental3398Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3398Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
