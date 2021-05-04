import { TestBed } from '@angular/core/testing';

import { Experimental3100Service } from './experimental3100.service';

describe('Experimental3100Service', () => {
  let service: Experimental3100Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3100Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
