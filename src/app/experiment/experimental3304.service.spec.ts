import { TestBed } from '@angular/core/testing';

import { Experimental3304Service } from './experimental3304.service';

describe('Experimental3304Service', () => {
  let service: Experimental3304Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3304Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
