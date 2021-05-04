import { TestBed } from '@angular/core/testing';

import { Experimental3473Service } from './experimental3473.service';

describe('Experimental3473Service', () => {
  let service: Experimental3473Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3473Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
