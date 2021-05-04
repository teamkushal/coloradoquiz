import { TestBed } from '@angular/core/testing';

import { Experimental343Service } from './experimental343.service';

describe('Experimental343Service', () => {
  let service: Experimental343Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental343Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
