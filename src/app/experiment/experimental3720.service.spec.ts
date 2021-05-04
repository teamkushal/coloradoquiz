import { TestBed } from '@angular/core/testing';

import { Experimental3720Service } from './experimental3720.service';

describe('Experimental3720Service', () => {
  let service: Experimental3720Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3720Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
