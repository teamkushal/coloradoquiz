import { TestBed } from '@angular/core/testing';

import { Experimental2280Service } from './experimental2280.service';

describe('Experimental2280Service', () => {
  let service: Experimental2280Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2280Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
