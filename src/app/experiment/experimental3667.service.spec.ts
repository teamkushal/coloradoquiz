import { TestBed } from '@angular/core/testing';

import { Experimental3667Service } from './experimental3667.service';

describe('Experimental3667Service', () => {
  let service: Experimental3667Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3667Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
