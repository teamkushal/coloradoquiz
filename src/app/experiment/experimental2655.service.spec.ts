import { TestBed } from '@angular/core/testing';

import { Experimental2655Service } from './experimental2655.service';

describe('Experimental2655Service', () => {
  let service: Experimental2655Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2655Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
