import { TestBed } from '@angular/core/testing';

import { Experimental3088Service } from './experimental3088.service';

describe('Experimental3088Service', () => {
  let service: Experimental3088Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3088Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
