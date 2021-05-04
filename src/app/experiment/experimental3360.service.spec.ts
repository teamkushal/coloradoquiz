import { TestBed } from '@angular/core/testing';

import { Experimental3360Service } from './experimental3360.service';

describe('Experimental3360Service', () => {
  let service: Experimental3360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
