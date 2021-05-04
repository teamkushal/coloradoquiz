import { TestBed } from '@angular/core/testing';

import { Experimental3012Service } from './experimental3012.service';

describe('Experimental3012Service', () => {
  let service: Experimental3012Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3012Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
