import { TestBed } from '@angular/core/testing';

import { Experimental2672Service } from './experimental2672.service';

describe('Experimental2672Service', () => {
  let service: Experimental2672Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2672Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
