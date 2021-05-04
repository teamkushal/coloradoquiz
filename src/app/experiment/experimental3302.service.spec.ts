import { TestBed } from '@angular/core/testing';

import { Experimental3302Service } from './experimental3302.service';

describe('Experimental3302Service', () => {
  let service: Experimental3302Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3302Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
