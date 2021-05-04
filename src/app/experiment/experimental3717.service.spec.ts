import { TestBed } from '@angular/core/testing';

import { Experimental3717Service } from './experimental3717.service';

describe('Experimental3717Service', () => {
  let service: Experimental3717Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3717Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
