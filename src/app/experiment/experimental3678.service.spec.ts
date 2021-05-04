import { TestBed } from '@angular/core/testing';

import { Experimental3678Service } from './experimental3678.service';

describe('Experimental3678Service', () => {
  let service: Experimental3678Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3678Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
