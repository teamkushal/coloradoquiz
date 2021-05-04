import { TestBed } from '@angular/core/testing';

import { Experimental3731Service } from './experimental3731.service';

describe('Experimental3731Service', () => {
  let service: Experimental3731Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3731Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
