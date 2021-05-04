import { TestBed } from '@angular/core/testing';

import { Experimental3160Service } from './experimental3160.service';

describe('Experimental3160Service', () => {
  let service: Experimental3160Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3160Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
