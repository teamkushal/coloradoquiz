import { TestBed } from '@angular/core/testing';

import { Experimental3733Service } from './experimental3733.service';

describe('Experimental3733Service', () => {
  let service: Experimental3733Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3733Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
