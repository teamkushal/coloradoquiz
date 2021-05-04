import { TestBed } from '@angular/core/testing';

import { Experimental2385Service } from './experimental2385.service';

describe('Experimental2385Service', () => {
  let service: Experimental2385Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2385Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
