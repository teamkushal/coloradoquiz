import { TestBed } from '@angular/core/testing';

import { Experimental3300Service } from './experimental3300.service';

describe('Experimental3300Service', () => {
  let service: Experimental3300Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3300Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
