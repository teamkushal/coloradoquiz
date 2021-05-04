import { TestBed } from '@angular/core/testing';

import { Experimental467Service } from './experimental467.service';

describe('Experimental467Service', () => {
  let service: Experimental467Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental467Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
