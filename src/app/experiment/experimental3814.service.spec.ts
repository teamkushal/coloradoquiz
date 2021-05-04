import { TestBed } from '@angular/core/testing';

import { Experimental3814Service } from './experimental3814.service';

describe('Experimental3814Service', () => {
  let service: Experimental3814Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3814Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
