import { TestBed } from '@angular/core/testing';

import { Experimental2546Service } from './experimental2546.service';

describe('Experimental2546Service', () => {
  let service: Experimental2546Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2546Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
