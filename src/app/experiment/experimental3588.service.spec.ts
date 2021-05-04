import { TestBed } from '@angular/core/testing';

import { Experimental3588Service } from './experimental3588.service';

describe('Experimental3588Service', () => {
  let service: Experimental3588Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3588Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
