import { TestBed } from '@angular/core/testing';

import { Experimental3245Service } from './experimental3245.service';

describe('Experimental3245Service', () => {
  let service: Experimental3245Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3245Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
