import { TestBed } from '@angular/core/testing';

import { Experimental3881Service } from './experimental3881.service';

describe('Experimental3881Service', () => {
  let service: Experimental3881Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3881Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
