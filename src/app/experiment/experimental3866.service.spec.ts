import { TestBed } from '@angular/core/testing';

import { Experimental3866Service } from './experimental3866.service';

describe('Experimental3866Service', () => {
  let service: Experimental3866Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3866Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
