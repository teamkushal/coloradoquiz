import { TestBed } from '@angular/core/testing';

import { Experimental284Service } from './experimental284.service';

describe('Experimental284Service', () => {
  let service: Experimental284Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental284Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
