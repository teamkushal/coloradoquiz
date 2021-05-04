import { TestBed } from '@angular/core/testing';

import { Experimental3465Service } from './experimental3465.service';

describe('Experimental3465Service', () => {
  let service: Experimental3465Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3465Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
