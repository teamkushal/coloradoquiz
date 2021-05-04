import { TestBed } from '@angular/core/testing';

import { Experimental3043Service } from './experimental3043.service';

describe('Experimental3043Service', () => {
  let service: Experimental3043Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3043Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
