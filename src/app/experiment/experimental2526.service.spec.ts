import { TestBed } from '@angular/core/testing';

import { Experimental2526Service } from './experimental2526.service';

describe('Experimental2526Service', () => {
  let service: Experimental2526Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2526Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
