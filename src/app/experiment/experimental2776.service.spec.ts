import { TestBed } from '@angular/core/testing';

import { Experimental2776Service } from './experimental2776.service';

describe('Experimental2776Service', () => {
  let service: Experimental2776Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2776Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
