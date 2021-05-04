import { TestBed } from '@angular/core/testing';

import { Experimental762Service } from './experimental762.service';

describe('Experimental762Service', () => {
  let service: Experimental762Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental762Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
