import { TestBed } from '@angular/core/testing';

import { Experimental3960Service } from './experimental3960.service';

describe('Experimental3960Service', () => {
  let service: Experimental3960Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3960Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
