import { TestBed } from '@angular/core/testing';

import { Experimental3142Service } from './experimental3142.service';

describe('Experimental3142Service', () => {
  let service: Experimental3142Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3142Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
