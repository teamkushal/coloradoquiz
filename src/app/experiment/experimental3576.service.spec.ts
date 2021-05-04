import { TestBed } from '@angular/core/testing';

import { Experimental3576Service } from './experimental3576.service';

describe('Experimental3576Service', () => {
  let service: Experimental3576Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3576Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
