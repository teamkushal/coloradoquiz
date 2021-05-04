import { TestBed } from '@angular/core/testing';

import { Experimental3609Service } from './experimental3609.service';

describe('Experimental3609Service', () => {
  let service: Experimental3609Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3609Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
