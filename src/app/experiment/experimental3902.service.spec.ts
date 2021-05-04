import { TestBed } from '@angular/core/testing';

import { Experimental3902Service } from './experimental3902.service';

describe('Experimental3902Service', () => {
  let service: Experimental3902Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3902Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
