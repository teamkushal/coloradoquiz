import { TestBed } from '@angular/core/testing';

import { Experimental3116Service } from './experimental3116.service';

describe('Experimental3116Service', () => {
  let service: Experimental3116Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3116Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
