import { TestBed } from '@angular/core/testing';

import { Experimental3496Service } from './experimental3496.service';

describe('Experimental3496Service', () => {
  let service: Experimental3496Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3496Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
