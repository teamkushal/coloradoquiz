import { TestBed } from '@angular/core/testing';

import { Experimental3431Service } from './experimental3431.service';

describe('Experimental3431Service', () => {
  let service: Experimental3431Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3431Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
