import { TestBed } from '@angular/core/testing';

import { Experimental3649Service } from './experimental3649.service';

describe('Experimental3649Service', () => {
  let service: Experimental3649Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3649Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
