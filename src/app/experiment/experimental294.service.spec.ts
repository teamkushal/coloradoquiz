import { TestBed } from '@angular/core/testing';

import { Experimental294Service } from './experimental294.service';

describe('Experimental294Service', () => {
  let service: Experimental294Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental294Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
