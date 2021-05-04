import { TestBed } from '@angular/core/testing';

import { Experimental2639Service } from './experimental2639.service';

describe('Experimental2639Service', () => {
  let service: Experimental2639Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2639Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
