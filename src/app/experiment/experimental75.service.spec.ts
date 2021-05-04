import { TestBed } from '@angular/core/testing';

import { Experimental75Service } from './experimental75.service';

describe('Experimental75Service', () => {
  let service: Experimental75Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental75Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
