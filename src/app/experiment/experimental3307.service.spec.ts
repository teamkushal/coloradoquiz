import { TestBed } from '@angular/core/testing';

import { Experimental3307Service } from './experimental3307.service';

describe('Experimental3307Service', () => {
  let service: Experimental3307Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3307Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
