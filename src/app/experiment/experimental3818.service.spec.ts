import { TestBed } from '@angular/core/testing';

import { Experimental3818Service } from './experimental3818.service';

describe('Experimental3818Service', () => {
  let service: Experimental3818Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3818Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
