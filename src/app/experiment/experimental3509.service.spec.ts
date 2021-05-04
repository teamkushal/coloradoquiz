import { TestBed } from '@angular/core/testing';

import { Experimental3509Service } from './experimental3509.service';

describe('Experimental3509Service', () => {
  let service: Experimental3509Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3509Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
