import { TestBed } from '@angular/core/testing';

import { Experimental3903Service } from './experimental3903.service';

describe('Experimental3903Service', () => {
  let service: Experimental3903Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3903Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
