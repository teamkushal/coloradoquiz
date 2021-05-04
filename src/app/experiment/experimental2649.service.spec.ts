import { TestBed } from '@angular/core/testing';

import { Experimental2649Service } from './experimental2649.service';

describe('Experimental2649Service', () => {
  let service: Experimental2649Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2649Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
