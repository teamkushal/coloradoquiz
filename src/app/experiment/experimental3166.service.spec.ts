import { TestBed } from '@angular/core/testing';

import { Experimental3166Service } from './experimental3166.service';

describe('Experimental3166Service', () => {
  let service: Experimental3166Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3166Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
