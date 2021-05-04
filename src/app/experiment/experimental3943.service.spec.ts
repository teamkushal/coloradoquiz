import { TestBed } from '@angular/core/testing';

import { Experimental3943Service } from './experimental3943.service';

describe('Experimental3943Service', () => {
  let service: Experimental3943Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3943Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
