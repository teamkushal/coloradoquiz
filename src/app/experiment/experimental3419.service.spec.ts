import { TestBed } from '@angular/core/testing';

import { Experimental3419Service } from './experimental3419.service';

describe('Experimental3419Service', () => {
  let service: Experimental3419Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3419Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
