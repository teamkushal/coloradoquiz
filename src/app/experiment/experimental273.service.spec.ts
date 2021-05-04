import { TestBed } from '@angular/core/testing';

import { Experimental273Service } from './experimental273.service';

describe('Experimental273Service', () => {
  let service: Experimental273Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental273Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
