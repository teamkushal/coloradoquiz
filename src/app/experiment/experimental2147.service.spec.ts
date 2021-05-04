import { TestBed } from '@angular/core/testing';

import { Experimental2147Service } from './experimental2147.service';

describe('Experimental2147Service', () => {
  let service: Experimental2147Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2147Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
