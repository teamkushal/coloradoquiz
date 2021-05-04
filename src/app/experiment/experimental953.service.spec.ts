import { TestBed } from '@angular/core/testing';

import { Experimental953Service } from './experimental953.service';

describe('Experimental953Service', () => {
  let service: Experimental953Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental953Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
