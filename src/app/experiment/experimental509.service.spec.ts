import { TestBed } from '@angular/core/testing';

import { Experimental509Service } from './experimental509.service';

describe('Experimental509Service', () => {
  let service: Experimental509Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental509Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
