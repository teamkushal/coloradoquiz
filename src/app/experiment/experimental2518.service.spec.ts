import { TestBed } from '@angular/core/testing';

import { Experimental2518Service } from './experimental2518.service';

describe('Experimental2518Service', () => {
  let service: Experimental2518Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2518Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
