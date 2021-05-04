import { TestBed } from '@angular/core/testing';

import { Experimental2284Service } from './experimental2284.service';

describe('Experimental2284Service', () => {
  let service: Experimental2284Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2284Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
