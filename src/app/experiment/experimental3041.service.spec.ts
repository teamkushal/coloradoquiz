import { TestBed } from '@angular/core/testing';

import { Experimental3041Service } from './experimental3041.service';

describe('Experimental3041Service', () => {
  let service: Experimental3041Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3041Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
