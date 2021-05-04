import { TestBed } from '@angular/core/testing';

import { Experimental3224Service } from './experimental3224.service';

describe('Experimental3224Service', () => {
  let service: Experimental3224Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3224Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
