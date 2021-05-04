import { TestBed } from '@angular/core/testing';

import { Experimental3157Service } from './experimental3157.service';

describe('Experimental3157Service', () => {
  let service: Experimental3157Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3157Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
