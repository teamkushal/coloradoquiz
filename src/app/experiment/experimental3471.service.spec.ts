import { TestBed } from '@angular/core/testing';

import { Experimental3471Service } from './experimental3471.service';

describe('Experimental3471Service', () => {
  let service: Experimental3471Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3471Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
